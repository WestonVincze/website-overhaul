import { createMachine, assign } from "xstate";
import { Animations } from "./Animations";
/**
 * FSM for the AnimatedScreen component
 * - hierarchical state with iterative options at root
 * - holds the current index in the context
 */

interface Context {
  currentIndex: number;
}

export const AnimatedScreenFSM = createMachine<Context>({
  initial: "loop",
  predictableActionArguments: true,
  context: {
    currentIndex: 0
  },
  states: {
    loop: {
      on: {
        NEXT: {
          target: "loop",
          actions: assign((context) => {
            const nextIndex = (context.currentIndex + 1) % Animations.length;
            return {
              currentIndex: nextIndex
            };
          })
        }
      }
    },
    random: {
      on: {
        NEXT: {
          target: "random",
          actions: assign((context) => {
            const randomIndex = Math.floor(Math.random() * Animations.length);
            return {
              currentIndex: randomIndex
            };
          })
        }
      }
    }
  }
});
