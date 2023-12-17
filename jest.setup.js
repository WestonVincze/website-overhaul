import "@testing-library/jest-dom";

jest.mock("@providers/AppStateProvider", () => ({
  useAppState: () => ({
    appState: {},
    isReady: true,
  }),
}));

jest.mock("@xstate/react", () => ({
  useSelector: () => true,
}));

jest.useFakeTimers();
