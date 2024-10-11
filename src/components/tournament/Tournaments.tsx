import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import { DescriptionText, Title } from "../base/BaseText.tsx";
import backgroundImage from "../../assets/images/tournaments_background.svg";
import { RegisterButton } from "../base/RegisterButton.tsx";
import { tournamentTabs } from "./tournamentTabs.ts";
import { InfoTabCard } from "../base/InfoTab.tsx";
import { useState } from "react";
import { mainSpacing } from "../../constants/spacing.ts";

export function Tournaments() {
  const [selectedTab, setSelectedTab] = useState(tournamentTabs[0]);

  return (
    <VStack zIndex={1} gap={mainSpacing}>
      <Title
        titleText="Regelmäßige Turniere"
        underTitleText="Gewinne täglich Sachpreise ohne einen Einsatz zu zahlen"
      />
      <Flex justify="center" gap="90px" alignSelf="stretch">
        <Stack justify="space-evenly" maxWidth="550px">
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
          <Stack gap="23px">
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
          </Stack>
          <Box width="279px" height="494px">
            <Image src={selectedTab.image} />
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );
}
