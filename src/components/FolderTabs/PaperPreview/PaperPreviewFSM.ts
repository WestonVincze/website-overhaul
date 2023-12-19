import { createMachine, assign } from "xstate";
import {
  DEFAULT_Y_OFFSET,
  HOVER_Y_OFFSET,
  ACTIVE_Y_OFFSET,
  ACTIVE_X_OFFSET,
} from "./types";

export const AnimationStates = {
  default: "default",
  hovered: "idle",
  active: "active",
};

interface Context {
  y: number;
  x: number;
  opacity: number;
}

export const PaperPreviewFSM = createMachine<Context>({
  predictableActionArguments: true,
  initial: AnimationStates.default,
  context: {
    y: DEFAULT_Y_OFFSET,
    x: 0,
    opacity: 1,
  },
  states: {
    [AnimationStates.default]: {
      entry: assign({
        y: () => DEFAULT_Y_OFFSET,
        x: () => 0,
        opacity: () => 0,
      }),
      on: {
        HOVER: AnimationStates.hovered,
        ACTIVE: AnimationStates.active,
      },
    },
    [AnimationStates.hovered]: {
      entry: assign({
        y: () => HOVER_Y_OFFSET,
        x: () => 0,
        opacity: () => 1,
      }),
      on: {
        LEAVE_HOVER: AnimationStates.default,
        ACTIVE: AnimationStates.active,
      },
    },
    [AnimationStates.active]: {
      entry: assign({
        y: () => ACTIVE_Y_OFFSET,
        x: () => ACTIVE_X_OFFSET,
        opacity: () => 0.8,
      }),
      on: {
        LEAVE_ACTIVE: AnimationStates.default,
      },
    },
  },
});
