import { Box, Flex, Image } from "@chakra-ui/react";
import headerLogo from "../../assets/images/header_logo.png";
import { NavBar } from "./NavBar.tsx";
import { useNavigate } from "react-router-dom";

export function HeaderBar() {
  const navigate = useNavigate();

  return (
    <Flex
      zIndex="1000"
      borderBottom="2px solid #0c202d"
      bgColor="#253C4A"
      width="100%"
      position="sticky"
      top={0}
      align="center"
      gap="20px"
      justify="space-between"
      paddingX={["10px", "15px", "20px", "25px"]}
      paddingY={["8px", "10px", "12px"]}
    >
      <Box height={["50px", "60px"]} flexGrow={[1, 0]}>
        <Image
          align="left"
          objectFit="contain"
          boxSize="100%"
          onClick={() => navigate("/")}
          _hover={{ cursor: "pointer" }}
          src={headerLogo}
        />
      </Box>
      <NavBar />
    </Flex>
  );
}
