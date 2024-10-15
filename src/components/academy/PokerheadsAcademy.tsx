import { VStack } from "@chakra-ui/react";
import { Title } from "../base/BaseText.tsx";
import { academyTabs } from "./academyTabs.ts";
import { allLinks } from "../header/navigationLinks.ts";
import { mainSpacing } from "../../constants/spacing.ts";
import { TabDisplay } from "../base/TabDisplay.tsx";

export function PokerheadsAcademy() {
  return (
    <VStack id={allLinks.training.link} zIndex={1} gap={mainSpacing}>
      <Title
        titleText="Pokerheads Akademie"
        underTitleText="verbessere dein Spiel durch tägliches Training"
      />
      <TabDisplay tabs={academyTabs} side="left" imageSide="left" />
    </VStack>
  );
}
