import {
  Box,
  Flex,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import infoIcon from "../../assets/images/info_icon.png";
import smartPhoneInfo from "../../assets/images/smartphone_info.webp";
import { infoIcons } from "./infoIcon.tsx";
import { InfoCard, InfoCardStack } from "./InfoCard.tsx";
import smartPhoneInfoBackground from "../../assets/images/smartphone_info_background.svg";
import { DescriptionText } from "../base/BaseText.tsx";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";

const width = 267;
const height = 550;

export function SmartphoneInfo() {
  const dir = useResponsiveValue({ base: "column", md: "row" });
  const align = useResponsiveValue({ base: "center", md: "" });
  const gap = useResponsiveValue({ base: "15px", md: "0px" });
  return (
    <Flex
      gap={gap}
      direction={dir}
      alignSelf="stretch"
      justify="center"
      align={align}
      position="relative"
    >
      <Image
        zIndex={-1}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        src={smartPhoneInfoBackground}
      />
      <InfoCardStack wrap="wrap-reverse">
        <InfoCard topText="Gewinne Sachpreise" bottomText="im Tunier" />
        <InfoCard
          alignSelf="start"
          topText="Lerne"
          bottomText="die Odds kennen"
        />
        <InfoCard topText="Trainiere" bottomText="mit dem Trainer" />
      </InfoCardStack>
      <Box width="267px" position="relative">
        <Image src={smartPhoneInfo} />
        {infoIcons.map(
          ({ top, left, content, title, popoverPlacement }, index) => (
            <Box key={index}>
              <Popover placement={popoverPlacement} trigger="hover">
                <PopoverTrigger>
                  <Image
                    height="18px"
                    width="18px"
                    position="absolute"
                    top={`${(top / height) * 100}%`}
                    left={`${(left / width) * 100}%`}
                    cursor="pointer"
                    src={infoIcon}
                  />
                </PopoverTrigger>
                <PopoverContent bgColor="dark">
                  <PopoverArrow bgColor="dark" />
                  <PopoverCloseButton color="white" />
                  <PopoverHeader>
                    <DescriptionText>{title}</DescriptionText>
                  </PopoverHeader>
                  <PopoverBody>
                    <DescriptionText>{content}</DescriptionText>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          ),
        )}
      </Box>
      <InfoCardStack wrap="wrap">
        <InfoCard topText="Beweise dich" bottomText="im Elo-Match" />
        <InfoCard
          alignSelf="end"
          topText="Analysiere"
          bottomText="spezielle Hände"
        />
        <InfoCard topText="Vertiefe dein Wissen" bottomText="im Quiz" />
      </InfoCardStack>
    </Flex>
  );
}
