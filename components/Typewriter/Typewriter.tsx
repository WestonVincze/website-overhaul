import { useTypewriter } from "./useTypewriter";
import styles from "./Typewriter.module.css";

/**
 * Renders an h1, h2, or p tag that utilizes the `useTypewriter` hook to "type" text
 */
export type Size = "small" | "medium" | "large";
interface TypewriterProps {
  text: string;
  tagType?: "h1" | "h2" | "p";
  delay?: number;
  size?: Size;
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
  size = "medium",
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
    <Tag
      className={styles[size]}
      style={centered ? { textAlign: "center" } : {}}
      {...props}
    >
      {inlineTag ? `<${typed} />` : typed}
    </Tag>
  );
};
