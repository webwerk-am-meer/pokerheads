import { Box, Text, TextProps } from "@chakra-ui/react";

export function TitleText({ children }: TextProps) {
  return (
    <Text fontSize="48px" lineHeight="65px" fontWeight="700">
      {children}
    </Text>
  );
}

export function SubTitleText({ children }: TextProps) {
  return (
    <Text fontWeight="600" fontSize="22px" lineHeight="32px">
      {children}
    </Text>
  );
}

export function DescriptionText({ children }: TextProps) {
  return (
    <Text fontWeight="500" fontSize="18px" lineHeight="16px">
      {children}
    </Text>
  );
}

export function Title({
  titleText,
  subTitleText,
}: {
  titleText: string;
  subTitleText: string;
}) {
  return (
    <Box>
      <TitleText>{titleText}</TitleText>
      <SubTitleText>{subTitleText}</SubTitleText>
    </Box>
  );
}
