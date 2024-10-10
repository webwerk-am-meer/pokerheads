import { GiHamburgerMenu } from "react-icons/gi";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export function BurgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GiHamburgerMenu
        color="white"
        size="40px"
        cursor="pointer"
        onClick={onOpen}
      />
      <Drawer size="xs" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="light">
          <DrawerBody>
            <VStack spacing={4} paddingTop={1}></VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
