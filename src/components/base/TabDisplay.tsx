import { InfoTab } from "./tab.ts";
import { useState } from "react";
import { Box, Flex, Image, Stack, useBreakpointValue } from "@chakra-ui/react";
import { InfoTabCard } from "./InfoTab.tsx";
import backgroundImage from "../../assets/images/tournaments_background.svg";
import noImage from "../../assets/images/no-image.png";
import { DescriptionText } from "./BaseText.tsx";
import { RegisterButton } from "./RegisterButton.tsx";

type Props = {
  tabs: InfoTab[];
  imageAndTabPlacement: "left" | "right";
  imagePlacement: "left" | "right";
  offsetFunc?: (index: number, length: number) => number;
};

export function TabDisplay({
  tabs,
  imageAndTabPlacement,
  offsetFunc,
  imagePlacement,
}: Props) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const displayTabsOnTop = useBreakpointValue({ base: true, lg: false });

  console.log("selectedTab", selectedTab);

  return (
    <>
      {displayTabsOnTop && (
        <Flex
          width="100vw"
          gap="15px"
          paddingX="15px"
          paddingBottom="10px"
          overflowX="auto"
          sx={{
            "::-webkit-scrollbar": {
              bgColor: "#0c202d",
              borderRadius: "10px",
              height: "10px",
            },
            "::-webkit-scrollbar-thumb": {
              bgColor: "#5e93a3",
              borderRadius: "10px",
            },
          }}
        >
          <HorizontalTabs />
        </Flex>
      )}
      <Flex
        wrap={["wrap", "wrap", "wrap", "nowrap"]}
        justify="center"
        rowGap="20px"
        dir={imageAndTabPlacement === "left" ? "ltr" : "rtl"}
        columnGap={["30px", "40px", "50px", "60px", "90px"]}
        alignSelf="stretch"
      >
        <Flex
          dir={imagePlacement === "left" ? "ltr" : "rtl"}
          align="center"
          position="relative"
        >
          <Image
            display={["none", "none", "none", "block"]}
            transform="translate(-45%, -50%)"
            top="50%"
            left="50%"
            zIndex={-1}
            position="absolute"
            src={backgroundImage}
          />
          <Box width={["279px"]} height={["494px"]}>
            <Image
              width="100%"
              height="100%"
              objectFit="contain"
              fallbackSrc={noImage}
              src={selectedTab.image}
            />
          </Box>
          {!displayTabsOnTop && <VerticalTabs />}
        </Flex>
        <Stack
          justify="space-evenly"
          dir="ltr"
          maxWidth="550px"
          gap={["20px", "50px", "80px"]}
        >
          <DescriptionText>{selectedTab.description}</DescriptionText>
          <RegisterButton>JETZT KOSTENLOS AUSPROBIEREN</RegisterButton>
        </Stack>
      </Flex>
    </>
  );

  function VerticalTabs() {
    return (
      <Stack gap="23px">
        {tabs.map((tabInfo, index, list) => (
          <Box
            key={index}
            transform={
              offsetFunc && `translateX(${offsetFunc(index, list.length)}px)`
            }
          >
            <InfoTabCard
              onClick={() => setSelectedTab(tabInfo)}
              isSelected={selectedTab.id === tabInfo.id}
              tabText={tabInfo.tabText}
            />
          </Box>
        ))}
      </Stack>
    );
  }

  function HorizontalTabs() {
    return (
      <>
        {tabs.map((tabInfo, index, list) => (
          <Box
            marginRight={index === list.length - 1 ? "auto" : undefined}
            marginLeft={index === 0 ? "auto" : undefined}
            key={index}
          >
            <InfoTabCard
              onClick={() => setSelectedTab(tabInfo)}
              isSelected={tabInfo.id === selectedTab.id}
              tabText={tabInfo.tabText}
            />
          </Box>
        ))}
      </>
    );
  }
}
