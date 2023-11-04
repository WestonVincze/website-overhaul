import React from "react";
import { useTypewriter } from "./useTypewriter";
import styles from "./Typewriter.module.css";
/**
 * Basic implementation of the useTypewriter hook
 */

export type Size = "small" | "medium" | "large";
interface TypewriterProps {
  text: string;
  delay?: number;
  size?: Size;
  inlineTag?: boolean;
  centered?: boolean;
  onDoneTyping?: () => void;
  onStartTyping?: () => void;
}

export const Typewriter = ({
  text,
  delay = 0,
  inlineTag = false,
  centered = false,
  size = "medium",
  onDoneTyping,
  onStartTyping,
  ...props
}: TypewriterProps): JSX.Element => {
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

  return (
    <h1
      className={styles[size]}
      style={centered ? { textAlign: "center" } : {}}
      {...props}
    >
      {inlineTag ? `<${typed} />` : typed}
    </h1>
  );
};
