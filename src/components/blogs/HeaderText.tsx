import { Stack, useBreakpointValue } from "@chakra-ui/react";
import { BaseText } from "../AGB/Imprint";

export function HeaderText({
  title,
  titleFs,
  subtitle,
  subtitleFs,
  header = false,
  ...rest
}: {
  title: string;
  titleFs?: string | number| string[];
  subtitle: string;
  subtitleFs?: string | number | string[];
  header?: boolean;
  [key: string]: any;
}) {
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  const isMobile = variant === "base" || variant === "sm" || variant === "md";
  return (
    <Stack
      alignItems={"center"}
      spacing={2}
      pb={"30px"}
      textAlign={"center"}
      {...rest}
    >
      <BaseText
        lineHeight={isMobile ? 1 : 0.8}
        fs={titleFs ? titleFs : 22}
        bold={true}
        color={header ? "white" : "white"}
        text={title}
        maxW={"90%"}
        as={"h1"}
      />
      <BaseText
        lineHeight={isMobile ? 1 : 0.8}
        bold={true}
        fs={subtitleFs ? subtitleFs : 35}
        maxW={"95%"}
        textAlign={"center"}
        color={header ? "white" : "white"}
        text={subtitle}
        as={"h2"}
      />
    </Stack>
  );
}
