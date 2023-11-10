import { useEffect, useState } from "react";
import { AnimatedWord } from "../AnimatedWord";
import { usePathname } from "next/navigation";
import { animated, useSpring } from "react-spring";
import { Typewriter } from "../Typewriter";
import { useAppState } from "../AppStateProvider";

const large = {
  fontSize: "100%",
  lineHeight: "100%",
};
const small = {
  fontSize: "80%",
  lineHeight: "80%",
};

type Path = "/" | "/resume" | "/projects";

const subHeadingText = {
  "/": "Web Developer",
  "/resume": "My Resume",
  "/projects": "My Projects",
};

enum AnimationStates {
  greeting,
  name,
  subHeading,
  hideGreeting,
  done,
}

export const AnimatedHeading = () => {
  const currentPage = usePathname() as Path;
  const isHomeScene = currentPage === "/";
  const [animationState, setAnimationState] = useState(
    AnimationStates.greeting,
  );
  const { appState } = useAppState();

  useEffect(() => {
    if (animationState !== AnimationStates.done) return;
    appState.send("INTRO_ANIMATION_COMPLETE");
  }, [animationState, appState]);

  useEffect(() => {
    const nameStateDelay = setTimeout(() => {
      setAnimationState(AnimationStates.name);
    }, 1500);
    const titleStateDelay = setTimeout(() => {
      setAnimationState(AnimationStates.subHeading);
    }, 3000);

    return () => {
      clearTimeout(nameStateDelay);
      clearTimeout(titleStateDelay);
    };
  }, []);

  const handleDoneTypingSubHeading = (): void => {
    if (animationState >= AnimationStates.hideGreeting) return;
    setTimeout(() => setAnimationState(AnimationStates.hideGreeting), 500);
  };

  const greetingStyle = useSpring({
    margin: 0,
    opacity: animationState >= AnimationStates.hideGreeting ? 0 : 1,
    height: animationState >= AnimationStates.hideGreeting ? "0" : "5svh",
    onRest: () => {
      if (animationState === AnimationStates.hideGreeting)
        setAnimationState(AnimationStates.done);
    },
  });

  const animatedStyle = useSpring({
    ...(isHomeScene || animationState < AnimationStates.done ? large : small),
  });

  return (
    <>
      <animated.div style={greetingStyle}>
        <Typewriter
          text={"Hi. My name is"}
          delay={500}
          centered={true}
          size={"large"}
        />
      </animated.div>
      <span
        style={{
          fontSize: "var(--animated-font-size)",
          lineHeight: "var(--animated-font-size)",
          fontFamily: "var(--amatic)",
        }}
      >
        {animationState >= AnimationStates.name && (
          <animated.div style={animatedStyle}>
            <AnimatedWord word={"Weston Vincze"} />
          </animated.div>
        )}
      </span>
      {animationState >= AnimationStates.subHeading && (
        <Typewriter
          text={subHeadingText[currentPage]}
          inlineTag={true}
          centered={true}
          onDoneTyping={() => handleDoneTypingSubHeading()}
        />
      )}
    </>
  );
};
