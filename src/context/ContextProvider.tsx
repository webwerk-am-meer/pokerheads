import { createContext, ReactNode, useContext } from "react";

const AppContext = createContext({});

export function ContextProvider({ children }: { children: ReactNode }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
