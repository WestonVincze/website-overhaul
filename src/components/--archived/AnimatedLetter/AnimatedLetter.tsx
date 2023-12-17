import { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./AnimatedLetter.module.css";
import { DragSnap } from "@/components/--archived/Drag/DragSnap";

const ROTATION_THRESHOLD = 15;

type rotateDirection = "left" | "right";

const rotateAngle = (direction: rotateDirection): string => {
  return `${direction === "left" ? "-" : ""}${ROTATION_THRESHOLD}`;
};

interface AnimatedLetterProps {
  letter: string;
}

/**
 * Creates a letter that can be manipulated by user
 * @param letter the letter to be animated
 */
export const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
  const [isTargeted, setIsTargeted] = useState(false);
  const [rotateDirection, setRotateDirection] =
    useState<rotateDirection>("left");

  const flipRotation = (): void => {
    setRotateDirection(rotateDirection === "left" ? "right" : "left");
  };

  const onMouseEnter = (): void => {
    if (isTargeted) return;
    setIsTargeted(true);
  };

  const onMouseLeave = (): void => {
    if (!isTargeted) return;
    setIsTargeted(false);
  };

  const animatedStyle = useSpring({
    loop: { reverse: true },
    transform: isTargeted
      ? `rotate(${rotateAngle(rotateDirection)}deg)`
      : "rotate(0deg)",
    onRest: () => flipRotation(),
  });

  return letter === " " ? (
    <span className={styles.animatedLetter}>&nbsp;</span>
  ) : (
    <DragSnap>
      <animated.span
        className={styles.animatedLetter}
        onMouseEnter={() => onMouseEnter()}
        onMouseLeave={() => onMouseLeave()}
        style={animatedStyle}
      >
        {letter}
      </animated.span>
    </DragSnap>
  );
};
