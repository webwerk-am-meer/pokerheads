import { Flex } from "@chakra-ui/react";
import { allDestinies } from "./navigationLinks.ts";
import { NavText } from "./NavText.tsx";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";
import { BurgerMenu } from "./BurgerMenu.tsx";

export function NavBar() {
  const showBurgerMenu = useResponsiveValue({ base: true, md: false });

  return (
    <Flex gap="50px">
      {showBurgerMenu ? (
        <BurgerMenu />
      ) : (
        <>
          {allDestinies.map(({ name, link }, index) => (
            <NavText text={name} link={link} key={index} />
          ))}
        </>
      )}
    </Flex>
  );
}
