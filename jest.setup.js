import "@testing-library/jest-dom";

jest.mock('../AppStateProvider', () => ({
  useAppState: () => ({
    appState: {},
    isReady: true,
  }),
}));

jest.mock('@xstate/react', () => ({
  useSelector: () => true,
}));