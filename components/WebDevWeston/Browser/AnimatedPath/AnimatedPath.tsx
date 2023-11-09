import { useSpring, animated } from "react-spring";

interface AnimatedPathProps {
  toggle: boolean;
  stroke: string;
  fill: string;
  d: string;
  transform?: string;
  delay?: number;
}

export const AnimatedPath = ({
  toggle,
  stroke,
  fill,
  d,
  transform = "translate(0,0)",
  delay = 0,
}: AnimatedPathProps) => {
  const start = { opacity: 0.5, transform: `${transform} scale(0)` };
  const end = { opacity: 1, transform: `${transform} scale(1)` };
  const animatedStyle = useSpring({
    from: start,
    to: toggle ? end : start,
    delay: toggle ? delay : 0,
  });
  return (
    <animated.path
      style={{
        stroke,
        fill,
        strokeWidth: "0",
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeDashoffset: "0",
        strokeLinejoin: "miter",
        strokeMiterlimit: "4",
        fillRule: "nonzero",
        ...animatedStyle,
      }}
      transform={animatedStyle.transform}
      d={d}
      strokeLinecap="round"
    />
  );
};
