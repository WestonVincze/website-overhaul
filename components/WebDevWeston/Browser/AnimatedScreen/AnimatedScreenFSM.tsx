import { createMachine, assign } from 'xstate'
/**
 * Tool to through an animation collection (will be imported)
 */

const animationCollection = [
  {

  }
]

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
              context.currentIndex < animationCollection.length - 1
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
              Math.floor(Math.random() * animationCollection.length)
            return {
              currentIndex: randomIndex
            }
          })
        }
      }
    }
  }
})
