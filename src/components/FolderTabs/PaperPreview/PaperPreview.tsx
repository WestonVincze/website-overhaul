import { useEffect } from "react";
import { animated, useTrail } from "react-spring";
import styles from "./PaperPreview.module.css";
import { useMachine } from "@xstate/react";
import { PaperPreviewFSM } from "./PaperPreviewFSM";
import { omitOnReducedMotion } from "@hocs/omitOnReducedMotion";

interface PaperPreviewProps {
  hover: boolean;
  active: boolean;
  zIndex?: number;
}

const PaperPreview = ({
  hover = false,
  active = false,
  zIndex = 0,
}: PaperPreviewProps) => {
  const [current, send] = useMachine(PaperPreviewFSM);

  useEffect(() => {
    send(hover && !active ? "HOVER" : "LEAVE_HOVER");
  }, [hover, send, active]);

  const animatedStyles = useTrail(2, {
    to: { y: current.context.y, opacity: current.context.opacity },
  });

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
