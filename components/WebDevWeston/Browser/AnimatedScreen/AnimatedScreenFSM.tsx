import { createMachine, assign } from 'xstate'
import { Animations } from './Animations'
/**
 * Tool to through an animation collection (will be imported)
 */

interface Context {
  currentIndex: number
}

export const AnimatedScreenFSM = createMachine<Context>({
  initial: 'loop',
  context: {
    currentIndex: 0
  },
  states: {
    loop: {
      on: {
        NEXT: {
          target: 'loop',
          actions: assign((context) => {
            const nextIndex =
              context.currentIndex < Animations.length - 1
                ? context.currentIndex + 1
                : 0
            return {
              currentIndex: nextIndex
            }
          })
        }
      }
    },
    random: {
      on: {
        NEXT: {
          target: 'random',
          actions: assign((context) => {
            const randomIndex =
              Math.floor(Math.random() * Animations.length)
            return {
              currentIndex: randomIndex
            }
          })
        }
      }
    }
  }
})
