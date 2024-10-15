import { Flex } from "@chakra-ui/react";
import { NavText } from "./header/NavText.tsx";

export function Footer() {
  return (
    <Flex
      align={["end", "start"]}
      marginTop="100px"
      justify="end"
      gap={["5px", "50px"]}
      direction={["column", "row"]}
    >
      <NavText text="AGB" link="/agb" />
      <NavText text="Datenschutz" link="/datenschutz" />
      <NavText text="Impressum" link="/impressum" />
    </Flex>
  );
}
