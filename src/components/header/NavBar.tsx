import { Flex, Text } from "@chakra-ui/react";
import { navigationLinks } from "../../constants/navigationLink.tsx";

export function NavBar() {
  return (
    <Flex gap="50px">
      {navigationLinks.map((n, i) => (
        <Text fontWeight="600" fontSize="24px" lineHeight="35px" key={i}>
          {n.name}
        </Text>
      ))}
    </Flex>
  );
}
