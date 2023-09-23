import { assign, createMachine } from "xstate";

export const AppStates = {
  loading: "loading",
  ready: "ready",
};

export const AppStateFSM = createMachine({
  id: "app",
  initial: AppStates.loading,
  context: {
    introAnimationFinished: false,
  },
  predictableActionArguments: true,
  states: {
    [AppStates.loading]: {
      on: {
        INTRO_ANIMATION_COMPLETE: {
          target: AppStates.ready,
          actions: assign({
            introAnimationFinished: true,
          }),
        },
      },
    },
    [AppStates.ready]: {},
  },
});
