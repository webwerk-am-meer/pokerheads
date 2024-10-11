import { useResponsiveValue } from "../../hooks/breakpoint.tsx";
import { Flex, Image } from "@chakra-ui/react";
import headerLogo from "../../assets/images/header_logo.png";
import { NavBar } from "./NavBar.tsx";

export function HeaderBar() {
  const imageWidth = useResponsiveValue({
    base: "200px",
    sm: "250px",
    md: "300px",
    lg: "425px",
  });

  return (
    <Flex justify="space-between">
      <Image objectFit="scale-down" width={imageWidth} src={headerLogo} />
      <NavBar />
    </Flex>
  );
}
