import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import { DescriptionText, Title } from "../base/BaseText.tsx";
import { InfoTabCard } from "../base/InfoTab.tsx";
import { useState } from "react";
import backgroundImage from "../../assets/images/academy_background.svg";
import { academyTabs } from "./tabs.ts";
import { RegisterButton } from "../base/RegisterButton.tsx";

export function PokerheadsAcademy() {
  const [selectedTab, setSelectedTab] = useState(academyTabs[0]);

  return (
    <VStack zIndex={1} gap="50px">
      <Title
        titleText="Pokerheads Akademie"
        underTitleText="verbessere dein Spiel durch tägliches Training"
      />
      <Flex justify="center" gap="90px" alignSelf="stretch">
        <Flex align="center" position="relative">
          <Image
            transform="translate(-45%, -50%)"
            top="50%"
            left="50%"
            zIndex={-1}
            src={backgroundImage}
            position="absolute"
          />
          <Stack gap="23px">
            {academyTabs.map((tabInfo, index) => (
              <InfoTabCard
                onClick={() => setSelectedTab(tabInfo)}
                key={index}
                isSelected={selectedTab.id === tabInfo.id}
                tabText={tabInfo.tabText}
              />
            ))}
          </Stack>
          <Box width="220px" height="425px">
            <Image src={selectedTab.image} />
          </Box>
        </Flex>
        <Stack maxWidth="550px" gap="80px">
          <DescriptionText>{selectedTab.description}</DescriptionText>
          <RegisterButton>JETZT KOSTENLOS AUSPROBIEREN</RegisterButton>
        </Stack>
      </Flex>
    </VStack>
  );
}
