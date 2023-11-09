import { useEffect, useState } from "react";

interface useTypewriterProps {
  text: string;
  delay?: number;
  typeSpeed?: number;
  playRetypeAnimation?: boolean;
  onStartTyping?: () => void;
  onDoneTyping?: () => void;
}

export const useTypewriter = ({
  text,
  delay,
  typeSpeed = 40,
  playRetypeAnimation = false,
  onStartTyping,
  onDoneTyping,
}: useTypewriterProps): string => {
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDelayed, setIsDelayed] = useState(true);
  const [onStartTriggered, setOnStartTriggered] = useState(false);
  const [onDoneTriggered, setOnDoneTriggered] = useState(false);

  useEffect(() => {
    const setDelay = setTimeout(() => {
      setIsDelayed(false);
    }, delay);

    return () => clearTimeout(setDelay);
  }, [delay]);

  useEffect(() => {
    if (isDelayed) return;
    setOnDoneTriggered(false);
    if (playRetypeAnimation) setIsDeleting(typed.length > 0);
    else setTyped("");
    // TODO: something isn't working here
    if (onStartTriggered) return;
    onStartTyping?.();
    setOnStartTriggered(true);
    // we ONLY want to run the this effect when the text changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    if (isDelayed) return;
    if (isDeleting && typed.length === 0) setIsDeleting(false);
    if (typed === text && !isDeleting) {
      // TODO: something isn't working here
      if (onDoneTriggered) return;
      onDoneTyping?.();
      setOnDoneTriggered(true);
      return;
    }

    const typeDelay = setTimeout(() => {
      setTyped((prevTyped) => {
        if (isDeleting && prevTyped.length > 0) {
          return prevTyped.slice(0, -1);
        }
        return prevTyped + text[prevTyped.length];
      });
    }, typeSpeed);

    return () => clearTimeout(typeDelay);
  }, [
    text,
    typed,
    isDeleting,
    typeSpeed,
    onDoneTyping,
    isDelayed,
    onDoneTriggered,
  ]);

  return typed;
};
