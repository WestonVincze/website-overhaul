import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styles from "./PaperPreview.module.css";
import { useMachine } from "@xstate/react";
import { PaperPreviewFSM, AnimationStates } from "./PaperPreviewFSM";
import { OFF_SCREEN_Y_OFFSET, OFF_SCREEN_X_OFFSET } from "./types";

interface PaperPreviewProps {
  hovering: boolean;
  active: boolean;
  startActive?: boolean;
}

export const PaperPreview = ({
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
