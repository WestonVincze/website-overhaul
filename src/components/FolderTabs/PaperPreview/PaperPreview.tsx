import { useEffect, useState } from "react";
import { animated, useTrail } from "react-spring";
import styles from "./PaperPreview.module.css";
import { useMachine } from "@xstate/react";
import { PaperPreviewFSM } from "./PaperPreviewFSM";
import { ACTIVE_Y_OFFSET, ACTIVE_X_OFFSET } from "./types";
import { omitOnReducedMotion } from "@hocs/omitOnReducedMotion";

interface PaperPreviewProps {
  hovering: boolean;
  active: boolean;
  startActive?: boolean;
  zIndex?: number;
}

const PaperPreview = ({
  hovering = false,
  active = false,
  startActive = false,
  zIndex = 0,
}: PaperPreviewProps) => {
  const [reset, setReset] = useState(startActive);
  const [current, send] = useMachine(PaperPreviewFSM);

  useEffect(() => {
    send(hovering ? "HOVER" : "LEAVE_HOVER");
  }, [hovering, send]);

  useEffect(() => {
    if (active) {
      send("ACTIVE");
    } else {
      send("LEAVE_ACTIVE");
      resetAnimation();
    }
  }, [active, send]);

  const resetAnimation = (): void => {
    setReset(true);
  };

  const animatedStyles = useTrail(2, {
    from: active ? { y: ACTIVE_Y_OFFSET, x: ACTIVE_X_OFFSET, opacity: 0 } : {},
    to: {
      y: current.context.y,
      x: current.context.x,
      opacity: current.context.opacity,
    },
    immediate: reset,
  });

  useEffect(() => {
    if (reset) setReset(false);
  }, [reset]);

  return (
    <div className={styles.paperPreview} style={{ zIndex }}>
      {animatedStyles.map((trail, i) => (
        <animated.div
          key={i}
          className={styles.paper}
          style={{
            ...trail,
            transform: `rotate(${i === 0 ? "-" : ""}0.3deg)`,
            top: `${i * 5}px`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};

// PaperPreview is an animated component that serves no purpose if the user prefers reduced motion
const PaperPreviewWithReducedMotion = omitOnReducedMotion(PaperPreview);
export { PaperPreviewWithReducedMotion as PaperPreview };
