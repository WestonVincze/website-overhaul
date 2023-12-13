import styles from "./AnimatedGroup.module.css";
import { useSpring, animated } from "react-spring";

interface AnimatedGroupProps {
  toggle: boolean;
  stroke: string;
  fill: string;
  d: string;
  transform?: string;
  transformOrigin?: "center center" | "left top";
  delay?: number;
}

export const AnimatedGroup = ({
  toggle,
  stroke,
  fill,
  d,
  transform = "translate(0,0)",
  transformOrigin = "center center",
  delay = 0,
}: AnimatedGroupProps) => {
  const start = {
    opacity: 0,
    transform: "scale(0.5)",
  };
  const end = { opacity: 1, transform: "scale(1)" };
  const animatedStyle = useSpring({
    from: start,
    to: toggle ? end : start,
    delay: toggle ? delay : 0,
  });
  return (
    <animated.g
      style={{
        transformOrigin,
        willChange: "transform, opacity",
        ...animatedStyle,
      }}
    >
      <path
        className={styles.path}
        style={{ stroke, fill }}
        transform={transform}
        d={d}
      />
    </animated.g>
  );
};
