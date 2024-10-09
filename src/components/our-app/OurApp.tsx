import { VStack } from "@chakra-ui/react";
import { Title } from "../base/BaseText.tsx";
import { SmartphoneInfo } from "./SmartphoneInfo.tsx";
import { CallToAction } from "../base/CallToAction.tsx";

export function OurApp() {
  return (
    <VStack zIndex={2} gap="40px">
      <Title
        titleText="Unsere Mobile App"
        underTitleText="erhältlich auf allen Plattformen"
      />
      <SmartphoneInfo />
      <CallToAction />
    </VStack>
  );
}
