import { Flex } from "@chakra-ui/react";
import { NavText } from "./header/NavText.tsx";

export function Footer() {
  return (
    <Flex
      marginTop="70px"
      justify="center"
      gap={["20px", "50px"]}
      direction="row"
      paddingBottom={["10px", "15px", "20px", "25px"]}
    >
      <NavText text="AGB" link="/agb" />
      <NavText text="Datenschutz" link="/datenschutz" />
      <NavText text="Impressum" link="/impressum" />
    </Flex>
  );
}
