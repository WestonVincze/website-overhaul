import { useSpring, animated } from "react-spring";

interface AnimatedPathProps {
  toggle: boolean;
  stroke: string;
  fill: string;
  d: string;
  transform?: string;
  transformOrigin?: "center center" | "left top";
  delay?: number;
}

export const AnimatedPath = ({
  toggle,
  stroke,
  fill,
  d,
  transform = "translate(0,0)",
  transformOrigin = "center center",
  delay = 0,
}: AnimatedPathProps) => {
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
        style={{
          stroke,
          fill,
          strokeWidth: "0",
          strokeDasharray: "none",
          strokeLinecap: "butt", // lol butt
          strokeDashoffset: "0",
          strokeLinejoin: "miter",
          strokeMiterlimit: "4",
          fillRule: "nonzero",
        }}
        transform={transform}
        d={d}
        strokeLinecap="round"
      />
    </animated.g>
  );
};
