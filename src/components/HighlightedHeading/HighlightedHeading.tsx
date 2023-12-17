import { useSlideAnimation } from "@hooks/useSlideAnimation";

interface HighlightedHeadingProps {
  id: string;
  text: string;
}

export const HighlightedHeading = ({ id, text }: HighlightedHeadingProps) => {
  const [ref, animatedStyle, AnimatedH2] = useSlideAnimation("h2");
  return (
    <AnimatedH2 ref={ref} id={id} style={animatedStyle}>
      {text}
    </AnimatedH2>
  );
};
