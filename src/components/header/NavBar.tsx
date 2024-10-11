import { Flex } from "@chakra-ui/react";
import { allDestinies } from "./navigationLinks.ts";
import { NavText } from "./NavText.tsx";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";
import { BurgerMenu } from "./BurgerMenu.tsx";

export function NavBar() {
  const showBurgerMenu = useResponsiveValue({ base: true, md: false });
  const gap = useResponsiveValue({ base: "30px", md: "25px", lg: "50px" });
  return (
    <Flex gap={gap}>
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
