import { Box, Flex, Image, Stack, VStack } from "@chakra-ui/react";
import { DescriptionText, Title } from "../base/BaseText.tsx";
import { InfoTabCard } from "../base/InfoTab.tsx";
import { useState } from "react";
import backgroundImage from "../../assets/images/academy_background.svg";
import { academyTabs } from "./academyTabs.ts";
import { RegisterButton } from "../base/RegisterButton.tsx";
import { allLinks } from "../header/navigationLinks.ts";
import { mainSpacing } from "../../constants/spacing.ts";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";

export function PokerheadsAcademy() {
  const [selectedTab, setSelectedTab] = useState(academyTabs[0]);

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
    <VStack id={allLinks.training.link} zIndex={1} gap={mainSpacing}>
      <Title
        titleText="Pokerheads Akademie"
        underTitleText="verbessere dein Spiel durch tägliches Training"
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
      >
        <Flex align="center" position="relative">
          <Image
            transform="translate(-45%, -50%)"
            top="50%"
            left="50%"
            zIndex={-1}
            src={backgroundImage}
            position="absolute"
          />
          {!displayHorizontal && <LocalTabs />}
          <Box
            width={["167px", "193px", "220px"]}
            height={["325px", "375px", "425px"]}
          >
            <Image objectFit="cover" height="100%" src={selectedTab.image} />
          </Box>
        </Flex>
        <Stack maxWidth="550px" gap={["20px", "50px", "80px"]}>
          <DescriptionText>{selectedTab.description}</DescriptionText>
          <RegisterButton>JETZT KOSTENLOS AUSPROBIEREN</RegisterButton>
        </Stack>
      </Flex>
    </VStack>
  );

  function LocalTabs() {
    return (
      <Flex {...tabsDisplay}>
        {academyTabs.map((tabInfo, index) => {
          return (
            <InfoTabCard
              key={index}
              onClick={() => setSelectedTab(tabInfo)}
              isSelected={selectedTab.id === tabInfo.id}
              tabText={tabInfo.tabText}
            />
          );
        })}
      </Flex>
    );
  }
}
