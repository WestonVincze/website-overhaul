import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styles from "./PaperPreview.module.css";
import { useMachine } from "@xstate/react";
import { PaperPreviewFSM, AnimationStates } from "./PaperPreviewFSM";
import { OFF_SCREEN_Y_OFFSET, OFF_SCREEN_X_OFFSET } from "./types";
import { omitOnReducedMotion } from "hocs/omitOnReducedMotion";

interface PaperPreviewProps {
  hovering: boolean;
  active: boolean;
  startActive?: boolean;
}

const PaperPreview = ({
  hovering = false,
  active = false,
  startActive = false,
  ...props
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

  const springProps = useSpring({
    from: active ? { x: OFF_SCREEN_X_OFFSET, y: OFF_SCREEN_Y_OFFSET } : {},
    to: { x: current.context.x, y: current.context.y },
    onRest: current.value === AnimationStates.active ? resetAnimation : {},
    immediate: reset,
  });

  useEffect(() => {
    if (reset) setReset(false);
  }, [reset]);

  return (
    <animated.div
      style={springProps}
      className={styles.paperPreview}
      {...props}
    />
  );
};

// PaperPreview is an animated component that serves no purpose if the user prefers reduced motion
const PaperPreviewWithReducedMotion = omitOnReducedMotion(PaperPreview);
export { PaperPreviewWithReducedMotion as PaperPreview };
