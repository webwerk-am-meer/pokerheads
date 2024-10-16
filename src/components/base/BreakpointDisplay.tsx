import { Text, useBreakpoint } from "@chakra-ui/react";

export function BreakpointDisplay() {
  const breakpoint = useBreakpoint();

  return (
    <Text
      zIndex={100}
      fontSize="20px"
      bgColor="black"
      padding={2}
      borderRadius="2px"
      position="fixed"
      bottom={0}
      right={0}
    >
      {breakpoint}
    </Text>
  );
}
