import { Flex, Image, Text } from "@chakra-ui/react";
import headerLogo from "../../assets/images/header_logo.png";
import headerBackground from "../../assets/images/header_background.webp";
import { NavBar } from "./NavBar.tsx";
import { Links } from "./Links.tsx";

export function Header() {
  return (
    <Flex direction="column">
      <Flex justify="space-between">
        <Image width="425px" height="94px" src={headerLogo} />
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
        <Image width="481px" height="556px" src={headerBackground} />
      </Flex>
      <Links />
    </Flex>
  );
}
