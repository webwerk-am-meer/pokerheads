import { VStack } from "@chakra-ui/react";
import { Title } from "../base/BaseText.tsx";
import { SmartphoneInfo } from "./SmartphoneInfo.tsx";
import { CallToAction } from "../base/CallToAction.tsx";
import { allLinks } from "../header/navigationLinks.ts";

export function OurApp() {
  return (
    <VStack id={allLinks.app.link} zIndex={2} gap="40px">
      <Title
        titleText="Unsere Mobile App"
        underTitleText="erhältlich auf allen Plattformen"
      />
      <SmartphoneInfo />
      <CallToAction />
    </VStack>
  );
}
