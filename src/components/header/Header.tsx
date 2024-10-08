import { Flex, Image, Text } from "@chakra-ui/react";
import headerIcon from "../../assets/images/header_icon.svg";
import headerSmartphone from "../../assets/images/header_smartphone.svg";
import { NavBar } from "./NavBar.tsx";
import { HeaderLinks } from "./HeaderLinks.tsx";

export function Header() {
  return (
    <Flex direction="column">
      <Flex justify="space-between">
        <Image src={headerIcon} />
        <NavBar />
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex direction="column" gap="18px">
          <Text
            maxWidth="745px"
            fontWeight="600"
            fontSize="64px"
            lineHeight="65px"
          >
            Erlebe Heads-Up Poker, auf eine ganz neue Art!
          </Text>
          <Text fontWeight="600" fontSize="24.5px" lineHeight="35px">
            Elo-basiertes Ranglisten Poker mit täglichen Gewinnen
          </Text>
        </Flex>
        <Image src={headerSmartphone} />
      </Flex>
      <HeaderLinks />
    </Flex>
  );
}
