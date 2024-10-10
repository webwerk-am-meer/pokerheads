import { Flex } from "@chakra-ui/react";
import { NavText } from "./header/NavText.tsx";

export function Footer() {
  return (
    <Flex justify="end" gap="50px">
      <NavText text="AGB" link="/agb" />
      <NavText text="Datenschutz" link="/datenschutz" />
      <NavText text="Impressum" link="/impressum" />
    </Flex>
  );
}
