import { StackProps, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = StackProps & {
  topText?: string;
  bottomText?: string;
};

export function InfoCardStack({ children }: { children: ReactNode }) {
  return (
    <VStack maxWidth="450px" flexGrow={1} justify="space-around">
      {children}
    </VStack>
  );
}

export function InfoCard({ topText, bottomText, ...rest }: Props) {
  return (
    <VStack
      justify="center"
      paddingY="10px"
      borderRadius="3em"
      bgColor="white"
      border="3px solid #1E1E1E"
      width="260px"
      height="76px"
      gap="-10px"
      boxShadow="4px 4px 20px 0px #00000040"
      {...rest}
    >
      <Text color="#1E1E1E" fontWeight="800" fontSize="20px" lineHeight="29px">
        {topText}
      </Text>
      <Text color="#1E1E1E" fontWeight="500" fontSize="20px" lineHeight="29px">
        {bottomText}
      </Text>
    </VStack>
  );
}
