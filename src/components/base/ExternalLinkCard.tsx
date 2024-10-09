import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react";

type Props = {
  image: string;
  topText: string;
  bottomText: string;
  link: string;
  variant: "small" | "large";
};

export function ExternalLinkCard({
  image,
  bottomText,
  topText,
  link,
  variant,
}: Props) {
  const iconSize = variant === "large" ? "40px" : "32px";
  const fontSize = variant === "large" ? "20px" : "16px";
  const lineHeight = variant === "large" ? "29px" : "23px";

  return (
    <Link isExternal href={link} _hover={{ textDecoration: "none" }}>
      <Flex
        justify="center"
        cursor="pointer"
        align="center"
        gap={variant === "large" ? "15px" : "10px"}
        paddingY="10px"
        borderRadius="3em"
        bgColor="white"
        border="3px solid #1E1E1E"
        width={variant === "large" ? "260px" : "200px"}
        height={variant === "large" ? "76px" : "64px"}
        boxShadow="4px 4px 20px 0px #00000040"
        transition="background-color 0.25s"
      >
        <Image width={iconSize} height={iconSize} src={image} />
        <Stack gap="-30px">
          <Text
            color="#1E1E1E"
            fontWeight="400"
            fontSize={fontSize}
            lineHeight={lineHeight}
          >
            {topText}
          </Text>
          <Text
            color="#1E1E1E"
            fontWeight="800"
            fontSize={fontSize}
            lineHeight={lineHeight}
          >
            {bottomText}
          </Text>
        </Stack>
      </Flex>
    </Link>
  );
}
