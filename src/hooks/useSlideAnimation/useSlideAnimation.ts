import { AppStates, useAppState } from "@providers/AppStateProvider";
import { useSelector } from "@xstate/react";
import { ComponentType, ElementType, MutableRefObject } from "react";
import { SpringValues, useInView, useSpring, animated } from "react-spring";

export const useSlideAnimation = <T extends ElementType>(
  component: T,
): [
  MutableRefObject<HTMLElement>,
  SpringValues<{ opacity: number; y: number }>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ComponentType<any>,
] => {
  const [ref, isInView] = useInView();
  const { appState } = useAppState();
  const ready = useSelector(appState, (state) =>
    state.matches(AppStates.ready),
  );

  const animatedStyles = useSpring({
    from: { opacity: 0, y: 100 },
    to: ready && isInView ? { opacity: 1, y: 0 } : {},
    config: { tension: 100 },
  });

  const AnimatedComponent = animated(component);

  return [ref, animatedStyles, AnimatedComponent];
};
