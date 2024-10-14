import { Flex } from "@chakra-ui/react";
import { NavText } from "./header/NavText.tsx";
import { useResponsiveValue } from "../hooks/breakpoint.tsx";

export function Footer() {
  const gap = useResponsiveValue({ base: "5px", sm: "50px" });
  const direction = useResponsiveValue({ base: "column", sm: "row" });
  const align = useResponsiveValue({ base: "end", sm: "start" });

  return (
    <Flex
      align={align}
      marginTop="100px"
      justify="end"
      gap={gap}
      direction={direction}
    >
      <NavText text="AGB" link="/agb" />
      <NavText text="Datenschutz" link="/datenschutz" />
      <NavText text="Impressum" link="/impressum" />
    </Flex>
  );
}
