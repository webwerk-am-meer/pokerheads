import { Box, Flex, Text, TextProps } from "@chakra-ui/react";
import { AutoTextSize } from "auto-text-size";

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
    <Text
      fontWeight="500"
      fontSize={["16px", "17px", "18px"]}
      lineHeight={["24px", "25px", "26px"]}
      align={["center", "center", "left"]}
    >
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
    <Box width="100%">
      <Flex
        lineHeight={["50px", "60px", "65px"]}
        fontWeight="700"
        width="100%"
        color="white"
        justify="center"
        fontFamily="Jost"
      >
        <AutoTextSize mode="boxoneline" maxFontSizePx={48}>
          {titleText}
        </AutoTextSize>
      </Flex>
      <UnderTitleText align="center">{underTitleText}</UnderTitleText>
    </Box>
  );
}
