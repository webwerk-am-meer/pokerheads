import { Stack, StackProps, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

type CardProps = StackProps & {
  topText?: string;
  bottomText?: string;
};

type CardStackProps = StackProps & {
  children: ReactNode;
};

export function InfoCardStack({ children, ...rest }: CardStackProps) {
  return (
    <Stack
      direction={["row", "row", "column"]}
      maxWidth={["650px", "650px", "450px"]}
      flexGrow={1}
      gap="15px"
      align="center"
      justify="space-around"
      {...rest}
    >
      {children}
    </Stack>
  );
}

export function InfoCard({ topText, bottomText, ...rest }: CardProps) {
  return (
    <VStack
      justify="center"
      paddingY="10px"
      borderRadius="3em"
      bgColor="white"
      border="3px solid #1E1E1E"
      width={["210px", "210px", "210px", "260px"]}
      height={["65px", "65px", "65px", "76px"]}
      gap="-10px"
      boxShadow="4px 4px 20px 0px #00000040"
      {...rest}
    >
      <Text
        color="#1E1E1E"
        fontWeight="800"
        fontSize={["16px", "16px", "16px", "20px"]}
        lineHeight="29px"
      >
        {topText}
      </Text>
      <Text
        color="#1E1E1E"
        fontWeight="500"
        fontSize={["16px", "16px", "16px", "20px"]}
        lineHeight="29px"
      >
        {bottomText}
      </Text>
    </VStack>
  );
}
