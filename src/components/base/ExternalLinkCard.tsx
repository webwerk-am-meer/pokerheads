import { Image, Link, Stack, Text } from "@chakra-ui/react";

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
  const width = variant === "large" ? "260px" : "200px";
  const gap = variant === "large" ? "15px" : "10px";
  return (
    <Link
      display="flex"
      width={["100%", width]}
      height={variant === "large" ? "76px" : "64px"}
      isExternal
      href={link}
      _hover={{ textDecoration: "none" }}
      justifyContent={["center"]}
      alignItems="center"
      gap={["30px", gap]}
      paddingY="10px"
      borderRadius="3em"
      bgColor="white"
      border="3px solid #1E1E1E"
      boxShadow="4px 4px 20px 0px #00000040"
    >
      <Image width={iconSize} height={iconSize} src={image} />
      <Stack minWidth="100px" gap="-30px">
        <Text
          align="center"
          color="#1E1E1E"
          fontWeight="400"
          fontSize={fontSize}
          lineHeight={lineHeight}
        >
          {topText}
        </Text>
        <Text
          align="center"
          color="#1E1E1E"
          fontWeight="800"
          fontSize={fontSize}
          lineHeight={lineHeight}
        >
          {bottomText}
        </Text>
      </Stack>
    </Link>
  );
}

type Props2 = {
  image: string;
  text: string;
  link: string;
};

export function ExternalLinkCircle({ link, image, text }: Props2) {
  return (
    <Link
      _hover={{ textDecoration: "none" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100px"
      width="100px"
      borderRadius="50px"
      isExternal
      bgColor="white"
      border="3px solid #1E1E1E"
      boxShadow="4px 4px 20px 0px #00000040"
      href={link}
    >
      <Image boxSize="35px" src={image} />
      <Text align="center" color="#1E1E1E" fontWeight="800" fontSize="15px">
        {text}
      </Text>
    </Link>
  );
}
