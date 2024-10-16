import { Box, Flex, Image } from "@chakra-ui/react";
import headerLogo from "../../assets/images/header_logo.png";
import { NavBar } from "./NavBar.tsx";

export function HeaderBar() {
  return (
    <Flex gap="20px" justify="space-between">
      <Box maxWidth={["", "350px", "350px", "425px"]} flexGrow={[1, 0]}>
        <Image src={headerLogo} />
      </Box>
      <NavBar />
    </Flex>
  );
}
