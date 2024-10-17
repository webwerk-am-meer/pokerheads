import { Flex, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { externalLinks } from "../../constants/externalLink.ts";
import { ExternalLinkCard, ExternalLinkCircle } from "./ExternalLinkCard.tsx";
import customerImages from "../../assets/images/customer_images.png";

export function CallToAction() {
  return (
    <Stack gap="12px">
      <Flex
        display={["none", "flex"]}
        maxWidth={["", "410px", "inherit"]}
        justify="center"
        gap="8px"
        wrap="wrap"
      >
        {externalLinks.map((linkInfo, index) => (
          <ExternalLinkCard {...linkInfo} variant="small" key={index} />
        ))}
      </Flex>
      <Flex
        display={["flex", "none"]}
        maxWidth={["", "410px", "inherit"]}
        justify="space-between"
        gap="5px"
      >
        {externalLinks.map(({ image, bottomText, link }, index) => (
          <ExternalLinkCircle
            key={index}
            image={image}
            text={bottomText}
            link={link}
          />
        ))}
      </Flex>
      <VStack gap="3px">
        <Image width="280px" height="42px" src={customerImages} />
        <Text fontWeight="500" fontSize="15px" lineHeight="21.5px">
          mehr als{" "}
          <Text as="span" fontWeight="800">
            10.000+
          </Text>{" "}
          Nutzer
        </Text>
      </VStack>
    </Stack>
  );
}
