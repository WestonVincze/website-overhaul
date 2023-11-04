import React, { useEffect, useState } from "react";
import { AnimatedWord } from "../AnimatedWord";
import { useRouter } from "next/router";
import { animated, useSpring } from "react-spring";
import { Typewriter } from "../Typewriter";
import { useAppState } from "../AppStateProvider";

const large = {
  fontSize: "100%",
};
const small = {
  fontSize: "80%",
};

type route = "/" | "/resume" | "/skills";

const subHeadingText = {
  "/": "Web Developer",
  "/resume": "My Resume",
  "/skills": "My Skills",
};

enum AnimationStates {
  greeting,
  name,
  subHeading,
}

export const AnimatedHeading = (): JSX.Element => {
  const router = useRouter();
  const [AnimationState, setAnimationState] = useState(
    AnimationStates.greeting,
  );
  const { appState } = useAppState();
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    if (showGreeting) return;
    appState.send("INTRO_ANIMATION_COMPLETE");
  }, [showGreeting, appState]);

  // This is a *bit* of a hack, but it works for now
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
    setTimeout(() => setShowGreeting(false), 500);
  };

  const greetingStyle = useSpring({
    opacity: showGreeting ? 1 : 0,
    height: showGreeting ? "10svh" : "0",
  });

  const path = router.pathname as route;
  const isHomeScene = path === "/";
  const animatedStyle = useSpring({
    ...(isHomeScene || showGreeting ? large : small),
  });

  return (
    <>
      <animated.div style={greetingStyle}>
        <Typewriter
          text={"Hi. My name is..."}
          delay={500}
          centered={true}
          size={"large"}
        />
      </animated.div>
      {AnimationState >= AnimationStates.name && (
        <span
          style={{
            fontSize: "var(--animated-font-size)",
            lineHeight: "var(--animated-font-size",
          }}
        >
          <animated.div style={animatedStyle}>
            <AnimatedWord word={"Weston Vincze"} />
          </animated.div>
        </span>
      )}
      {AnimationState >= AnimationStates.subHeading && (
        <Typewriter
          text={subHeadingText[path]}
          inlineTag={true}
          centered={true}
          onDoneTyping={() => handleDoneTypingSubHeading()}
        />
      )}
    </>
  );
};
