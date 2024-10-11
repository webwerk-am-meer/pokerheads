import { Image, VStack } from "@chakra-ui/react";
import { Title } from "./base/BaseText.tsx";
import { CallToAction } from "./base/CallToAction.tsx";
import background from "../assets/images/ingame_background.webp";
import { mainSpacing } from "../constants/spacing.ts";

export function IngameOverview() {
  return (
    <VStack gap={mainSpacing}>
      <Title
        titleText="Von und für Pokerheads"
        underTitleText="Bringe dein Heads-Up Spiel aufs nächste Level"
      />
      <Image maxWidth="1000px" src={background} />
      <CallToAction />
    </VStack>
  );
}
