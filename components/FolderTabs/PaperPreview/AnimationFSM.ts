import { createMachine, assign } from 'xstate'

const HIDDEN_Y_OFFSET = 35
const VISIBLE_Y_OFFSET = 10
const OFF_SCREEN_Y_OFFSET = -100
const OFF_SCREEN_X_OFFSET = 100

export const AnimationStates = {
  default: 'default',
  hovered: 'idle',
  active: 'active'
}

interface Context {
  y: number
  x: number
}

export const animationMachine = createMachine<Context>({
  initial: AnimationStates.default,
  context: {
    y: HIDDEN_Y_OFFSET,
    x: 0
  },
  states: {
    [AnimationStates.default]: {
      entry: assign({
        y: () => HIDDEN_Y_OFFSET,
        x: () => 0
      }),
      on: {
        HOVER: AnimationStates.hovered,
        ACTIVE: AnimationStates.active
      }
    },
    [AnimationStates.hovered]: {
      entry: assign({
        y: () => VISIBLE_Y_OFFSET
      }),
      on: {
        LEAVE_HOVER: AnimationStates.default,
        ACTIVE: AnimationStates.active
      }
    },
    [AnimationStates.active]: {
      entry: assign({
        y: () => OFF_SCREEN_Y_OFFSET,
        x: () => OFF_SCREEN_X_OFFSET
      }),
      on: {
        LEAVE_ACTIVE: AnimationStates.default
      }
    }
  }
})
