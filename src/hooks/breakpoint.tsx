import { useBreakpointValue } from "@chakra-ui/react";

type Param<T> = {
  base: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
};

export function useResponsiveValue<T>(values: Param<T>): T {
  const value = useBreakpointValue<T>(values);
  return value ?? values.base;
}
