import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import { DescriptionText, Title } from "../base/BaseText.tsx";
import { RegisterButton } from "../base/RegisterButton.tsx";
import backgroundImage from "../../assets/images/tournaments_background.svg";
import { InfoTabCard } from "../base/InfoTab.tsx";
import { useState } from "react";
import { rankingTabs } from "./rankingTabs.ts";
import { allLinks } from "../header/navigationLinks.ts";
import { mainSpacing } from "../../constants/spacing.ts";

export function GlobalRankings() {
  const [selectedTab, setSelectedTab] = useState(rankingTabs[0]);

  return (
    <VStack id={allLinks.ranking.link} zIndex={1} gap={mainSpacing}>
      <Title
        titleText="Globale Rangliste"
        underTitleText="Teste deine Fähigkeiten in der Rangliste"
      />
      <Flex justify="center" gap="90px" alignSelf="stretch">
        <Flex align="center" position="relative">
          <Image
            transform="translate(-46%, -47%)"
            top="50%"
            left="50%"
            zIndex={-1}
            src={backgroundImage}
            position="absolute"
          />
          <Stack gap="23px">
            {rankingTabs.map((tabInfo, index) => (
              <Box key={index} transform={`translateX(${10 * (index + 1)}px)`}>
                <InfoTabCard
                  onClick={() => setSelectedTab(tabInfo)}
                  isSelected={tabInfo.id === selectedTab.id}
                  tabText={tabInfo.tabText}
                />
              </Box>
            ))}
          </Stack>
          <Box width="296px" height="461px">
            <Image src={selectedTab.image} />
          </Box>
        </Flex>
        <Stack justify="space-evenly" maxWidth="550px">
          <DescriptionText>{selectedTab.description}</DescriptionText>
          <RegisterButton>JETZT KOSTENLOS REGISTRIEREN</RegisterButton>
        </Stack>
      </Flex>
    </VStack>
  );
}
