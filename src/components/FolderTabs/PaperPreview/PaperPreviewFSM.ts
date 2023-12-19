import { createMachine, assign } from "xstate";

const HIDDEN_Y_OFFSET = 55;
const HOVER_Y_OFFSET = 30;

interface Context {
  y: number;
  opacity: number;
}

export const PaperPreviewFSM = createMachine<Context>({
  predictableActionArguments: true,
  initial: "hide",
  context: {
    y: HIDDEN_Y_OFFSET,
    opacity: 0,
  },
  states: {
    hide: {
      entry: assign({
        y: () => HIDDEN_Y_OFFSET,
        opacity: () => 0,
      }),
      on: {
        HOVER: "show",
      },
    },
    show: {
      entry: assign({
        y: () => HOVER_Y_OFFSET,
        opacity: () => 1,
      }),
      on: {
        LEAVE_HOVER: "hide",
      },
    },
  },
});
