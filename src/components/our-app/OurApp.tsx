import { VStack } from "@chakra-ui/react";
import { Title } from "../base/BaseText.tsx";
import { SmartphoneInfo } from "./SmartphoneInfo.tsx";
import { CallToAction } from "../base/CallToAction.tsx";
import { allLinks } from "../header/navigationLinks.ts";
import { mainSpacing } from "../../constants/spacing.ts";

export function OurApp() {
  return (
    <VStack id={allLinks.app.link} zIndex={2} gap={mainSpacing}>
      <Title
        titleText="Unsere Mobile App"
        underTitleText="erhältlich auf allen Plattformen"
      />
      <SmartphoneInfo />
      <CallToAction />
    </VStack>
  );
}
