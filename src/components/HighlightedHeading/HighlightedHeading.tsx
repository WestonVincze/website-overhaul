import styles from "./HighlightedHeading.module.css";
import { useInViewAnimation } from "@hooks/useInViewAnimation";

interface HighlightedHeadingProps {
  id: string;
  text: string;
}

export const HighlightedHeading = ({ id, text }: HighlightedHeadingProps) => {
  const [ref, animatedStyle, AnimatedH2, isInView] = useInViewAnimation(
    "h2",
    "slideLeft",
  );

  return (
    <AnimatedH2
      ref={ref}
      id={id}
      className={styles.highlighted}
      style={animatedStyle}
    >
      <span className={isInView ? styles.showHighlight : ""}>{text}</span>
    </AnimatedH2>
  );
};
