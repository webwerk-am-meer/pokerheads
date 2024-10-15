import { Flex, Image } from "@chakra-ui/react";
import headerLogo from "../../assets/images/header_logo.png";
import { NavBar } from "./NavBar.tsx";

export function HeaderBar() {
  return (
    <Flex justify="space-between">
      <Image
        objectFit="scale-down"
        width={["220px", "250px", "300px", "425px"]}
        src={headerLogo}
      />
      <NavBar />
    </Flex>
  );
}
