import { Flex, Text } from "@chakra-ui/react";
import { ExternalLinkCard } from "../base/ExternalLinkCard.tsx";
import { externalLinks } from "../../constants/externalLink.ts";

export function HeaderLinks() {
  return (
    <Flex direction="column" gap="22px">
      <Text fontWeight="700" fontSize="24px" lineHeight="35px" align="center">
        Ein Account, für alle Plattformen
      </Text>
      <Flex wrap="wrap" justify="center" gap="24px">
        {externalLinks.map((linkInfo, i) => (
          <ExternalLinkCard {...linkInfo} variant="large" key={i} />
        ))}
      </Flex>
    </Flex>
  );
}
