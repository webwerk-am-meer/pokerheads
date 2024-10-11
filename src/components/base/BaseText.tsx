import { Box, Text, TextProps } from "@chakra-ui/react";

export function TitleText({ children, ...rest }: TextProps) {
  return (
    <Text
      fontSize={["40px", "44px", "48px"]}
      lineHeight={["50px", "60px", "65px"]}
      fontWeight="700"
      {...rest}
    >
      {children}
    </Text>
  );
}

export function UnderTitleText({ children, ...rest }: TextProps) {
  return (
    <Text
      fontWeight="600"
      fontSize={["20px", "22px"]}
      lineHeight="32px"
      {...rest}
    >
      {children}
    </Text>
  );
}

export function DescriptionText({ children }: TextProps) {
  return (
    <Text fontWeight="500" fontSize="18px" lineHeight="26px">
      {children}
    </Text>
  );
}

export function Title({
  titleText,
  underTitleText,
}: {
  titleText: string;
  underTitleText: string;
}) {
  return (
    <Box>
      <TitleText align="center">{titleText}</TitleText>
      <UnderTitleText align="center">{underTitleText}</UnderTitleText>
    </Box>
  );
}
