import { Flex } from "@chakra-ui/react";
import { NavText } from "./header/NavText.tsx";

export function Footer() {
  return (
    <Flex justify="end" gap="50px">
      <NavText text="AGB" />
      <NavText text="Datenschutz" />
      <NavText text="Impressum" />
    </Flex>
  );
}
