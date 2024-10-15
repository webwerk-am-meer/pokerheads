import { VStack } from "@chakra-ui/react";
import { Title } from "../base/BaseText.tsx";
import { rankingTabs } from "./rankingTabs.ts";
import { allLinks } from "../header/navigationLinks.ts";
import { mainSpacing } from "../../constants/spacing.ts";
import { TabDisplay } from "../base/TabDisplay.tsx";

export function GlobalRankings() {
  return (
    <VStack id={allLinks.ranking.link} zIndex={1} gap={mainSpacing}>
      <Title
        titleText="Globale Rangliste"
        underTitleText="Teste deine Fähigkeiten in der Rangliste"
      />
      <TabDisplay
        tabs={rankingTabs}
        side="left"
        imageSide="right"
        offsetFunc={(index) => 10 * (index + 1)}
      />
    </VStack>
  );
}
