import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import { DescriptionText, Title } from "../base/BaseText.tsx";
import { RegisterButton } from "../base/RegisterButton.tsx";
import backgroundImage from "../../assets/images/tournaments_background.svg";
import { InfoTabCard } from "../base/InfoTab.tsx";
import { useState } from "react";
import { rankingTabs } from "./rankingTabs.ts";
import { allLinks } from "../header/navigationLinks.ts";
import { mainSpacing } from "../../constants/spacing.ts";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";

export function GlobalRankings() {
  const [selectedTab, setSelectedTab] = useState(rankingTabs[0]);

  const tabsDisplay = useResponsiveValue({
    base: {
      direction: "row",
      gap: "15px",
      justify: "center",
      width: "max-content",
    },
    lg: {
      direction: "column",
      gap: "23px",
    },
  });
  const displayHorizontal = useResponsiveValue({ base: true, lg: false });
  const wrap = useResponsiveValue({ base: "wrap", md: "no-wrap" });

  return (
    <VStack id={allLinks.ranking.link} zIndex={1} gap={mainSpacing}>
      <Title
        titleText="Globale Rangliste"
        underTitleText="Teste deine Fähigkeiten in der Rangliste"
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
        <Flex align="center" position="relative">
          <Image
            transform="translate(-46%, -47%)"
            top="50%"
            left="50%"
            zIndex={-1}
            src={backgroundImage}
            position="absolute"
          />
          {!displayHorizontal && <LocalTabs />}
          <Box
            width={["232px", "263px", "296px"]}
            height={["361", "411px", "461px"]}
          >
            <Image objectFit="cover" height="100%" src={selectedTab.image} />
          </Box>
        </Flex>
        <Stack
          justify="space-evenly"
          gap={["20px", "50px", "80px"]}
          maxWidth="550px"
        >
          <DescriptionText>{selectedTab.description}</DescriptionText>
          <RegisterButton>JETZT KOSTENLOS REGISTRIEREN</RegisterButton>
        </Stack>
      </Flex>
    </VStack>
  );

  function LocalTabs() {
    return (
      <Flex {...tabsDisplay}>
        {rankingTabs.map((tabInfo, index) => (
          <Box key={index} transform={`translateX(${10 * (index + 1)}px)`}>
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
