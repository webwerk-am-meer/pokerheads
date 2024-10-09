import { Button, ButtonProps } from "@chakra-ui/react";

export function RegisterButton({ children }: ButtonProps) {
  return (
    <Button
      fontWeight="700"
      fontSize="15px"
      lineHeight="21.5px"
      color="white"
      shadow="0px 6px 22px 0px #F529674D"
      bgColor="main"
      transition="background-color 0.25s"
      _hover={{
        bgColor: "mainHover",
      }}
      height="50px"
      borderRadius="10px"
    >
      {children}
    </Button>
  );
}
