import { Stack, StackProps, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";

type CardProps = StackProps & {
  topText?: string;
  bottomText?: string;
};

type CardStackProps = StackProps & {
  children: ReactNode;
};

export function InfoCardStack({ children, ...rest }: CardStackProps) {
  const dir = useResponsiveValue({ base: "row", md: "column" });
  const maxWidth = useResponsiveValue({ base: "650px", md: "450px" });

  return (
    <Stack
      direction={dir}
      maxWidth={maxWidth}
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
  const width = useResponsiveValue({ base: "210px", lg: "260px" });
  const height = useResponsiveValue({ base: "65px", lg: "76px" });
  const fontSize = useResponsiveValue({ base: "16px", lg: "20px" });
  return (
    <VStack
      justify="center"
      paddingY="10px"
      borderRadius="3em"
      bgColor="white"
      border="3px solid #1E1E1E"
      width={width}
      height={height}
      gap="-10px"
      boxShadow="4px 4px 20px 0px #00000040"
      {...rest}
    >
      <Text
        color="#1E1E1E"
        fontWeight="800"
        fontSize={fontSize}
        lineHeight="29px"
      >
        {topText}
      </Text>
      <Text
        color="#1E1E1E"
        fontWeight="500"
        fontSize={fontSize}
        lineHeight="29px"
      >
        {bottomText}
      </Text>
    </VStack>
  );
}
