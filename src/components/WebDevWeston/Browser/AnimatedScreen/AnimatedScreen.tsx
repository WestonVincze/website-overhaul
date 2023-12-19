import { useCallback, useEffect, useMemo, useState } from "react";
import { useTypewriter } from "@hooks/useTypewriter";
import { Animations } from "./Animations";
import { useMachine } from "@xstate/react";
import { AnimatedScreenFSM } from "./AnimatedScreenFSM";

/**
 * Acts as a screen within the Browser SVG component
 * - animation should play in which html is typed and once completed,
 *  a specific element is rendered and translated
 * - each animation will have multiple elements being generated
 * - we should loop through multiple animations
 *
 */
export const AnimatedScreen = () => {
  const [current, send] = useMachine(AnimatedScreenFSM);
  const [text, setText] = useState(
    Animations[current.context.currentIndex].text,
  );

  useEffect(() => {
    setText(Animations[current.context.currentIndex].text);
  }, [current]);

  const handleDoneTyping = useCallback((): void => {
    setTimeout(() => send("NEXT"), 1000);
  }, [send]);

  const typed = useTypewriter({ text, onDoneTyping: handleDoneTyping });

  const lines = useMemo(() => typed.split("|"), [typed]);

  return (
    <text
      width="100%"
      x="0"
      y="30%"
      dominantBaseline="middle"
      stroke="var(--font-color)"
      strokeWidth="1"
      fontSize={14}
      xmlSpace="preserve"
      aria-hidden="true" /* these pseudo code poems are visual aesthetic */
    >
      {lines.map((line, i) => (
        <tspan x="5%" dy={i === 0 ? "0" : "1.2em"} key={i}>
          {line}
        </tspan>
      ))}
    </text>
  );
};
