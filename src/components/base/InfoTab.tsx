import { Center, CenterProps, Text } from "@chakra-ui/react";
import { useRef } from "react";

type Props = {
  isSelected: boolean;
  tabText: string;
  onClick?: () => void;
};

export function InfoTabCard({
  tabText,
  isSelected,
  onClick,
  ...rest
}: Props & CenterProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Center
      ref={ref}
      _hover={{
        bgColor: "hover",
      }}
      transition="background-color 0.1s"
      onClick={() => {
        ref.current?.scrollIntoView({
          inline: "center",
          behavior: "smooth",
          block: "nearest",
        });
        onClick?.();
      }}
      cursor="pointer"
      borderRadius="10px"
      width={["150px", "150px", "190px"]}
      height="50px"
      border="white 1px solid"
      bgColor={isSelected ? "dark" : "light"}
      {...rest}
    >
      <Text fontWeight="700" fontSize="16px" lineHeight="23px">
        {tabText}
      </Text>
    </Center>
  );
}
