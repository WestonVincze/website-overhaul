import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Typewriter } from "../Typewriter";
import { useAppState } from "../AppStateProvider";

type Path = "/" | "/resume" | "/projects";

const subHeadingText = {
  "/": "Frontend Developer",
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

  // skip animation if url contains a hash
  useEffect(() => {
    if (window.location.hash) {
      setAnimationState(AnimationStates.done);
      return;
    }
  }, []);

  // listen for done state and update App state accordingly
  useEffect(() => {
    if (animationState !== AnimationStates.done) return;

    appState.send("INTRO_ANIMATION_COMPLETE");
  }, [animationState, appState]);

  const handleDoneTypingName = (): void => {
    setAnimationState(AnimationStates.subHeading);
  };

  const handleDoneTypingSubHeading = (): void => {
    if (animationState === AnimationStates.done) return;
    setAnimationState(AnimationStates.done);
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
