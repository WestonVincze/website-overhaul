import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext
} from "react";
import { useInterpret } from "@xstate/react";
import { InterpreterFrom } from "xstate";
import { AppStateFSM, AppStates } from "./AppStateFSM";

type AppState = InterpreterFrom<typeof AppStateFSM>;
export const AppStateContext = createContext<
  { appState: AppState } | undefined
>(undefined);

export const useAppState = (): {
  appState: AppState;
  isReady: (state: any) => boolean;
} => {
  const appContext = useContext(AppStateContext);
  if (appContext === undefined) {
    throw new Error("useAppState must be wrapped within an AppStateProvider");
  }

  const isReady = useCallback(
    (state: any): boolean => state.matches(AppStates.ready),
    []
  );

  return { appState: appContext.appState, isReady };
};

interface AppStateProviderProps {
  children: ReactNode;
}
export const AppStateProvider = ({
  children
}: AppStateProviderProps): JSX.Element => {
  const appState = useInterpret(AppStateFSM);

  return (
    <AppStateContext.Provider value={{ appState }}>
      {children}
    </AppStateContext.Provider>
  );
};
