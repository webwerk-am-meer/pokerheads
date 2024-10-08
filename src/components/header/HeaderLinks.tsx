import { Flex, Text } from "@chakra-ui/react";
import { ExternalLinkCard } from "../base/ExternalLinkCard.tsx";
import { externalLinks } from "../../constants/externalLink.ts";

export function HeaderLinks() {
  return (
    <Flex direction="column" gap="22px">
      <Text fontWeight="700" fontSize="24px" lineHeight="35px" align="center">
        Ein Account, für alle Plattformen
      </Text>
      <Flex justify="center" gap="24px">
        {externalLinks.map(({ image, topText, bottomText }, i) => (
          <ExternalLinkCard
            image={image}
            topText={topText}
            bottomText={bottomText}
            key={i}
          />
        ))}
      </Flex>
    </Flex>
  );
}
