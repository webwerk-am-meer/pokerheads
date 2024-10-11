import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import headerBackground from "../../assets/images/header_background.webp";
import { Links } from "./Links.tsx";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";

export function Header() {
  const dir = useResponsiveValue({ base: "column", md: "row" });
  const imageMaxHeight = useResponsiveValue({ base: "300px", md: "auto" });
  const imageMaxWidth = useResponsiveValue({
    base: "",
    md: "320px",
    lg: "480px",
  });
  const textAlign = useResponsiveValue({ base: "center", md: "left" });
  const textMinWidth = useResponsiveValue({ base: "", md: "450px" });

  return (
    <Stack>
      <Flex
        align="center"
        gap={["15px", "20px", "25px", "40px"]}
        direction={dir}
        justify="space-between"
      >
        <Stack minWidth={textMinWidth} gap={["8px", "13px", "18px"]}>
          <Text
            align={textAlign}
            maxWidth="745px"
            fontWeight="600"
            fontSize={["30px", "40px", "50px", "64px"]}
            lineHeight={["35px", "40px", "55px", "65px"]}
          >
            Erlebe Heads-Up Poker, auf eine ganz neue Art!
          </Text>
          <Text
            align={textAlign}
            fontWeight="600"
            fontSize={["20px", "21px", "22px", "25px"]}
            lineHeight={["25px", "30px", "35px"]}
          >
            Elo-basiertes Ranglisten Poker mit täglichen Gewinnen
          </Text>
        </Stack>
        <Box maxWidth={imageMaxWidth} height={imageMaxHeight}>
          <Image objectFit="contain" height="100%" src={headerBackground} />
        </Box>
      </Flex>
      <Links />
    </Stack>
  );
}
