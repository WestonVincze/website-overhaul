import { useTypewriter } from "@hooks/useTypewriter";
import styles from "./Typewriter.module.css";

/**
 * Renders `h1`, `h2`, or `p` tag with `useTypewriter` implementation
 */
interface TypewriterProps {
  text: string;
  tagType?: "h1" | "h2" | "p";
  delay?: number;
  inlineTag?: boolean;
  centered?: boolean;
  onDoneTyping?: () => void;
  onStartTyping?: () => void;
}

export const Typewriter = ({
  text,
  tagType = "h2",
  delay = 0,
  inlineTag = false,
  centered = false,
  onDoneTyping,
  onStartTyping,
  ...props
}: TypewriterProps) => {
  const handleDoneTyping = (): void => {
    onDoneTyping?.();
  };

  const handleStartTyping = (): void => {
    onStartTyping?.();
  };

  const typed = useTypewriter({
    text,
    delay,
    playRetypeAnimation: true,
    onStartTyping: handleStartTyping,
    onDoneTyping: handleDoneTyping,
  });

  const Tag = tagType;

  return (
    <Tag className={`${centered && styles.centered}`} {...props}>
      {inlineTag ? `<${typed} />` : typed}
    </Tag>
  );
};
