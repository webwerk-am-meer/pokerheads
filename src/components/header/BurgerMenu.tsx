import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import menuIcon from "../../assets/images/menu_icon.svg";
import { allDestinies } from "./navigationLinks.ts";
import { NavText } from "./NavText.tsx";
import { ArrowRightIcon } from "@chakra-ui/icons";

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
        <DrawerContent
          position="relative"
          gap={4}
          justifyContent="space-between"
          alignItems="center"
          padding="24px"
          bgColor="light"
        >
          <ArrowRightIcon
            width="25px"
            height="25px"
            margin="15px"
            color="white"
            position="absolute"
            top={0}
            left={0}
            cursor="pointer"
            onClick={onClose}
          />
          <VStack gap={4}>
            {allDestinies.map(({ name, link }, index) => (
              <NavText key={index} onSelect={onClose} text={name} link={link} />
            ))}
          </VStack>

          <VStack justifySelf="flex-end">
            <NavText text="AGB" link="/agb" onSelect={onClose} />
            <NavText
              text="Datenschutz"
              link="/datenschutz"
              onSelect={onClose}
            />
            <NavText text="Impressum" link="/impressum" onSelect={onClose} />
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
}
