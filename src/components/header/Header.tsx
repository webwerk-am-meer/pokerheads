import { Box, Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import headerBackground from "../../assets/images/header_background.webp";
import { Links } from "./Links.tsx";

export function Header() {
  return (
    <VStack>
      <Flex
        maxWidth="1250px"
        align="center"
        gap={["15px", "20px", "25px", "40px"]}
        direction={["column", "column", "column", "row"]}
        justify="space-between"
      >
        <Stack
          maxWidth={["360px", "360px", "450px", "600px", "730px"]}
          gap={["8px", "13px", "18px"]}
        >
          <Text
            align={["center", "center", "center", "left"]}
            maxWidth="745px"
            fontWeight="600"
            fontSize={["30px", "30px", "40px", "50px", "64px"]}
            lineHeight={["35px", "40px", "55px", "65px"]}
          >
            Erlebe Heads-Up Poker, auf eine ganz neue Art!
          </Text>

          <Text
            align={["center", "center", "center", "left"]}
            fontWeight="600"
            fontSize={["20px", "21px", "22px", "25px"]}
            lineHeight={["25px", "30px", "35px"]}
          >
            Elo-basiertes Ranglisten Poker mit täglichen Gewinnen
          </Text>
        </Stack>
        <Box
          minWidth={["", "", "481px"]}
          maxWidth={["481px"]}
          maxHeight="556px"
        >
          <Image
            objectFit="contain"
            height="100%"
            width="100%"
            src={headerBackground}
          />
        </Box>
      </Flex>
      <Links />
    </VStack>
  );
}
