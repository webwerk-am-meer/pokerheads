import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { allDestinies } from "./navigationLinks.ts";
import { NavText } from "./NavText.tsx";
import { BurgerMenu } from "./BurgerMenu.tsx";

export function NavBar() {
  const showBurgerMenu = useBreakpointValue({ base: true, md: false });

  return (
    <Flex gap={["30px", "30px", "25px", "50px"]}>
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
