import { useBreakpointValue } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

const AppContext = createContext({});

export function ContextProvider({ children }: { children: ReactNode }) {
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  const isMobile = variant === "base" || variant === "sm";

  return (
    <AppContext.Provider value={{ isMobile }}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
