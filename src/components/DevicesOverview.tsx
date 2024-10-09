import { Image, VStack } from "@chakra-ui/react";
import { Title } from "./base/BaseText.tsx";
import { CallToAction } from "./base/CallToAction.tsx";
import background from "../assets/images/devices_background.svg";

export function DevicesOverview() {
  return (
    <VStack>
      <Title
        titleText="Erlebe Heads-Up Poker"
        underTitleText="auf allen Geräten verfügbar"
      />
      <Image maxWidth="1000px" src={background} />
      <CallToAction />
    </VStack>
  );
}
