import { createMachine, assign } from 'xstate'
import {
  HIDDEN_Y_OFFSET,
  VISIBLE_Y_OFFSET,
  OFF_SCREEN_Y_OFFSET,
  OFF_SCREEN_X_OFFSET
} from './types'

export const AnimationStates = {
  default: 'default',
  hovered: 'idle',
  active: 'active'
}

interface Context {
  y: number
  x: number
}

export const PaperPreviewFSM = createMachine<Context>({
  predictableActionArguments: true,
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
