import { Flex } from "@chakra-ui/react";
import { navigationLinks } from "../../constants/navigationLink.tsx";
import { NavText } from "./NavText.tsx";

export function NavBar() {
  return (
    <Flex gap="50px">
      {navigationLinks.map(({ name }, i) => (
        <NavText text={name} key={i} />
      ))}
    </Flex>
  );
}
