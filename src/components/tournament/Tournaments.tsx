import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import { DescriptionText, Title } from "../base/BaseText.tsx";
import backgroundImage from "../../assets/images/tournaments_background.svg";
import { RegisterButton } from "../base/RegisterButton.tsx";
import { tournamentTabs } from "./tournamentTabs.ts";
import { InfoTabCard } from "../base/InfoTab.tsx";
import { useState } from "react";
import { mainSpacing } from "../../constants/spacing.ts";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";

export function Tournaments() {
  const [selectedTab, setSelectedTab] = useState(tournamentTabs[0]);

  const tabsDisplay = useResponsiveValue({
    base: {
      direction: "row",
      gap: "23px",
      justify: "center",
      width: "max-content",
    },
    lg: {
      direction: "column",
      gap: "23px",
    },
  });
  const displayHorizontal = useResponsiveValue({ base: true, lg: false });
  const wrap = useResponsiveValue({ base: "wrap-reverse", md: "no-wrap" });

  return (
    <VStack zIndex={1} gap={mainSpacing}>
      <Title
        titleText="Regelmäßige Turniere"
        underTitleText="Gewinne täglich Sachpreise ohne einen Einsatz zu zahlen"
      />
      {displayHorizontal && (
        <Box
          paddingBottom={3}
          width="100%"
          overflowX="auto"
          sx={{ scrollbarWidth: "thin" }}
        >
          <Flex width="max-content" justify="center">
            {displayHorizontal && <LocalTabs />}
          </Flex>
        </Box>
      )}
      <Flex
        wrap={wrap}
        justify="center"
        rowGap="20px"
        columnGap="90px"
        alignSelf="stretch"
        align="center"
      >
        <Stack
          gap={["20px", "50px", "80px"]}
          // justify="space-evenly"
          maxWidth="550px"
        >
          <DescriptionText>{selectedTab.description}</DescriptionText>
          <RegisterButton>JETZT KOSTENLOS REGISTRIEREN</RegisterButton>
        </Stack>
        <Flex align="center" position="relative">
          <Image
            transform="translate(-48%, -50%)"
            top="50%"
            left="50%"
            zIndex={-1}
            src={backgroundImage}
            position="absolute"
          />
          {!displayHorizontal && <LocalTabs />}
          <Box
            width={["223px", "250px", "279px"]}
            height={["394px", "444px", "494px"]}
          >
            <Image width="100%" src={selectedTab.image} />
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );

  function LocalTabs() {
    return (
      <Flex {...tabsDisplay}>
        {tournamentTabs.map((tabInfo, index, list) => (
          <Box
            key={index}
            transform={`translateX(${9 * (list.length - index)}px)`}
          >
            <InfoTabCard
              onClick={() => setSelectedTab(tabInfo)}
              isSelected={tabInfo.id === selectedTab.id}
              tabText={tabInfo.tabText}
            />
          </Box>
        ))}
      </Flex>
    );
  }
}
