import { createContext, ReactNode, useContext } from "react";
import { useResponsiveValue } from "../hooks/breakpoint.tsx";

type ContextData = {
  padding: string;
};

const AppContext = createContext<ContextData>({ padding: "" });

export function ContextProvider({ children }: { children: ReactNode }) {
  const padding = useResponsiveValue({
    base: "10px",
    sm: "15px",
    md: "20px",
    lg: "25px",
  });

  return (
    <AppContext.Provider value={{ padding }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
