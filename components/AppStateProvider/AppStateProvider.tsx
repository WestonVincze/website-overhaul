import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useInterpret } from "@xstate/react";
import { InterpreterFrom } from "xstate";
import { AppStateFSM, AppStates } from "./AppStateFSM";
import { useReducedMotion, Globals } from "react-spring";

type AppState = InterpreterFrom<typeof AppStateFSM>;
export const AppStateContext = createContext<
  { appState: AppState } | undefined
>(undefined);

export const useAppState = (): {
  appState: AppState;
  // the xstate callback uses any, so we have to as well
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isReady: (state: any) => boolean;
  reducedMotion: boolean | null;
  fontSize: number;
  lineHeight: number;
} => {
  const reducedMotion = useReducedMotion();

  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("font-size"),
  );

  const lineHeight = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--line-height",
    ),
  );

  // skip all react-spring animations if user prefers reduced motion
  useEffect(() => {
    Globals.assign({
      skipAnimation: reducedMotion === true,
    });

    return () => {
      Globals.assign({
        skipAnimation: false,
      });
    };
  });

  const appContext = useContext(AppStateContext);
  if (appContext === undefined) {
    throw new Error("useAppState must be wrapped within an AppStateProvider");
  }

  const isReady = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any): boolean => state.matches(AppStates.ready),
    [],
  );

  return {
    appState: appContext.appState,
    isReady,
    reducedMotion,
    fontSize,
    lineHeight,
  };
};

interface AppStateProviderProps {
  children: ReactNode;
}
export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const appState = useInterpret(AppStateFSM);

  return (
    <AppStateContext.Provider value={{ appState }}>
      {children}
    </AppStateContext.Provider>
  );
};
