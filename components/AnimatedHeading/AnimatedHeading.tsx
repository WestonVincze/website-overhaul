import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { usePathname } from "next/navigation";
import { Typewriter } from "../Typewriter";
import { useAppState } from "../AppStateProvider";
import { AnimatedWord } from "../AnimatedWord";

type Path = "/" | "/resume" | "/projects";

const subHeadingText = {
  "/": "Web Developer",
  "/resume": "My Resume",
  "/projects": "My Projects",
};

enum AnimationStates {
  name,
  subHeading,
  hideGreeting,
  done,
}

export const AnimatedHeading = () => {
  const currentPage = usePathname() as Path;
  const [animationState, setAnimationState] = useState(AnimationStates.name);
  const { appState } = useAppState();

  useEffect(() => {
    if (window.location.hash) {
      // skip animation if url contains a hash
      setAnimationState(AnimationStates.done);
      return;
    }
  }, []);

  const handleDoneTypingName = (): void => {
    setAnimationState(AnimationStates.subHeading);
  };

  const handleDoneTypingSubHeading = (): void => {
    appState.send("INTRO_ANIMATION_COMPLETE");
  };

  return (
    <header>
      {animationState >= AnimationStates.name && (
        <Typewriter
          text="Hi, I'm Weston Vincze."
          tagType="h1"
          centered={true}
          onDoneTyping={() => handleDoneTypingName()}
        />
      )}
      {animationState >= AnimationStates.subHeading && (
        <Typewriter
          text={subHeadingText[currentPage]}
          inlineTag={true}
          centered={true}
          onDoneTyping={() => handleDoneTypingSubHeading()}
        />
      )}
    </header>
  );
};
