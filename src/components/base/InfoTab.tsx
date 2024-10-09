import { Center, Text } from "@chakra-ui/react";

type Props = {
  isSelected: boolean;
  tabText: string;
  onClick?: () => void;
};

export function InfoTabCard({ tabText, isSelected, onClick }: Props) {
  return (
    <Center
      _hover={{
        bgColor: "hover",
      }}
      transition="background-color 0.1s"
      onMouseDown={onClick}
      cursor="pointer"
      borderRadius="10px"
      width="190px"
      height="50px"
      border="white 1px solid"
      bgColor={isSelected ? "dark" : "light"}
    >
      <Text fontWeight="700" fontSize="16px" lineHeight="23px">
        {tabText}
      </Text>
    </Center>
  );
}
