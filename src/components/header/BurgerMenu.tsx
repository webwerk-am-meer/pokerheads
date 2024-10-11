import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import menuIcon from "../../assets/images/menu_icon.svg";
import { allDestinies } from "./navigationLinks.ts";
import { NavText } from "./NavText.tsx";

export function BurgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        onMouseDown={onOpen}
        cursor="pointer"
        width="40px"
        height="40px"
        src={menuIcon}
      />
      <Drawer size="xs" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="light">
          <DrawerBody>
            <VStack spacing={4} paddingTop={1}>
              {allDestinies.map(({ name, link }, index) => (
                <NavText
                  key={index}
                  onSelect={onClose}
                  text={name}
                  link={link}
                />
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
