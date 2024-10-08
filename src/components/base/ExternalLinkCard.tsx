import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Props = {
  image: string;
  topText: string;
  bottomText: string;
};

export function ExternalLinkCard({ image, bottomText, topText }: Props) {
  return (
    <Flex
      cursor="pointer"
      align="center"
      paddingLeft="50px"
      gap="10px"
      paddingY="10px"
      borderRadius="3em"
      bgColor="white"
      border="3px solid #1E1E1E"
      width="260px"
      height="76px"
      boxShadow="4px 4px 20px 0px #00000040"
    >
      <Image width="40px" height="40px" src={image} />
      <Box>
        <Text
          color="#1E1E1E"
          fontWeight="400"
          fontSize="20px"
          lineHeight="29px"
        >
          {topText}
        </Text>
        <Text
          color="#1E1E1E"
          fontWeight="800"
          fontSize="20px"
          lineHeight="29px"
        >
          {bottomText}
        </Text>
      </Box>
    </Flex>
  );
}
