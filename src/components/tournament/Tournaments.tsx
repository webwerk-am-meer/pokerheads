import { VStack } from "@chakra-ui/react";
import { Title } from "../base/BaseText.tsx";
import { tournamentTabs } from "./tournamentTabs.ts";

import { mainSpacing } from "../../constants/spacing.ts";
import { TabDisplay } from "../base/TabDisplay.tsx";

export function Tournaments() {
  return (
    <VStack zIndex={1} gap={mainSpacing}>
      <Title
        titleText="Regelmäßige Turniere"
        underTitleText="Gewinne täglich Sachpreise ohne einen Einsatz zu zahlen"
      />
      <TabDisplay
        offsetFunc={(index, length) => 9 * (length - index)}
        tabs={tournamentTabs}
        imageAndTabPlacement="right"
        imagePlacement="right"
      />
    </VStack>
  );
}
