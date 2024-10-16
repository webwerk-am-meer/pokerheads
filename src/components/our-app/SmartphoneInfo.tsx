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
  useBreakpointValue,
} from "@chakra-ui/react";
import infoIcon from "../../assets/images/info_icon.png";
import smartPhoneInfo from "../../assets/images/smartphone_info.webp";
import { infoIcons } from "./infoIcon.tsx";
import { InfoCard, InfoCardStack } from "./InfoCard.tsx";
import smartPhoneInfoBackground from "../../assets/images/smartphone_info_background.svg";
import { DescriptionText } from "../base/BaseText.tsx";

export function SmartphoneInfo() {
  const small = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      gap={["15px", "15px", "0px"]}
      direction={["column", "column", "row"]}
      alignSelf="stretch"
      justify="center"
      align={["stretch", "center", "stretch"]}
      position="relative"
    >
      <Image
        display={["none", "none", "block"]}
        zIndex={-1}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        src={smartPhoneInfoBackground}
      />
      <InfoCardStack display={["none", "none", "flex"]} wrap="wrap-reverse">
        <InfoCard topText="Gewinne Sachpreise" bottomText="im Tunier" />
        <InfoCard
          alignSelf="start"
          topText="Lerne"
          bottomText="die Odds kennen"
        />
        <InfoCard topText="Trainiere" bottomText="mit dem Trainer" />
      </InfoCardStack>
      <Flex justify="center">
        <Box position="relative" width="267px">
          <Image src={smartPhoneInfo} />
          {infoIcons.map(
            (
              {
                top,
                left,
                content,
                title,
                popoverPlacement,
                smallPopoverPlacement,
              },
              index,
            ) => (
              <Box key={index}>
                <Popover
                  isLazy
                  lazyBehavior="unmount"
                  placement={small ? smallPopoverPlacement : popoverPlacement}
                  trigger="hover"
                >
                  <PopoverTrigger>
                    <Image
                      height="18px"
                      width="18px"
                      position="absolute"
                      top={top}
                      left={left}
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
      </Flex>
      <InfoCardStack display={["none", "none", "flex"]} wrap="wrap">
        <InfoCard topText="Beweise dich" bottomText="im Elo-Match" />
        <InfoCard
          alignSelf="end"
          topText="Analysiere"
          bottomText="spezielle Hände"
        />
        <InfoCard topText="Vertiefe dein Wissen" bottomText="im Quiz" />
      </InfoCardStack>

      {/*<Grid*/}
      {/*  gap="10px"*/}
      {/*  justifyContent="stretch"*/}
      {/*  display={["grid", "grid", "none"]}*/}
      {/*  templateColumns="auto auto"*/}
      {/*>*/}
      {/*  <InfoCard topText="Gewinne Sachpreise" bottomText="im Tunier" />*/}
      {/*  <InfoCard*/}
      {/*    alignSelf="start"*/}
      {/*    topText="Lerne"*/}
      {/*    bottomText="die Odds kennen"*/}
      {/*  />*/}
      {/*  <InfoCard topText="Trainiere" bottomText="mit dem Trainer" />*/}
      {/*  <InfoCard topText="Beweise dich" bottomText="im Elo-Match" />*/}
      {/*  <InfoCard*/}
      {/*    alignSelf="end"*/}
      {/*    topText="Analysiere"*/}
      {/*    bottomText="spezielle Hände"*/}
      {/*  />*/}
      {/*  <InfoCard topText="Vertiefe dein Wissen" bottomText="im Quiz" />*/}
      {/*</Grid>*/}
    </Flex>
  );
}
