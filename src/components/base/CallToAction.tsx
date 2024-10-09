import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import { externalLinks } from "../../constants/externalLink.ts";
import { ExternalLinkCard } from "./ExternalLinkCard.tsx";
import customerImages from "../../assets/images/customer_images.svg";

export function CallToAction() {
  return (
    <VStack gap="12px">
      <Flex justify="center" gap="8px" wrap="wrap">
        {externalLinks.map((linkInfo, i) => (
          <ExternalLinkCard {...linkInfo} variant="small" key={i} />
        ))}
      </Flex>
      <VStack gap="3px">
        <Image src={customerImages} />
        <Text fontWeight="500" fontSize="15px" lineHeight="21.5px">
          mehr als{" "}
          <Text as="span" fontWeight="800">
            10.000+
          </Text>{" "}
          Nutzer
        </Text>
      </VStack>
    </VStack>
  );
}
