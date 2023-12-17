import { useAppState } from "@/components/AppStateProvider";
import { useEffect, useRef, useState } from "react";

interface useTypewriterProps {
  text: string;
  delay?: number;
  typeSpeed?: number;
  playRetypeAnimation?: boolean;
  onStartTyping?: () => void;
  onDoneTyping?: () => void;
}

/**
 * Hook for creating a "typing" effect.
 *
 * **note:** If the user prefers reduced motion, the passed `text` will be returned but the typing logic will still take effect.
 */
export const useTypewriter = ({
  text,
  delay,
  typeSpeed = 40,
  playRetypeAnimation = false,
  onStartTyping,
  onDoneTyping,
}: useTypewriterProps): string => {
  const { reducedMotion } = useAppState();
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDelayed, setIsDelayed] = useState(true);

  const onStartTriggeredRef = useRef(false);
  const onDoneTriggeredRef = useRef(false);

  useEffect(() => {
    const setDelay = setTimeout(() => {
      setIsDelayed(false);
    }, delay);

    return () => clearTimeout(setDelay);
  }, [delay]);

  useEffect(() => {
    if (isDelayed) return;

    if (playRetypeAnimation) setIsDeleting(typed.length > 0);
    else setTyped("");

    if (!onStartTriggeredRef.current) {
      onStartTyping?.();
      onStartTriggeredRef.current = true;
    }

    return () => {
      onStartTriggeredRef.current = false;
    };
    // This effect should ONLY run when the text changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDelayed]);

  useEffect(() => {
    if (isDelayed || !text) return;

    if (isDeleting && typed.length === 0) setIsDeleting(false);

    if (typed === text && !isDeleting) {
      if (!onDoneTriggeredRef.current) {
        onDoneTyping?.();
        onDoneTriggeredRef.current = true;
      }
      return;
    }

    // add or remove characters depending on whether we are deleting or typing
    const handleTyping = () => {
      setTyped((prevTyped) => {
        if (isDeleting && prevTyped.length > 0) {
          return prevTyped.slice(0, -1);
        }
        return prevTyped + text[prevTyped.length];
      });
    };
    const typingInterval = setInterval(handleTyping, typeSpeed);

    return () => {
      clearInterval(typingInterval);
      onDoneTriggeredRef.current = false;
    };
  }, [text, typed, isDeleting, typeSpeed, onDoneTyping, isDelayed]);

  return reducedMotion ? text : typed;
};
