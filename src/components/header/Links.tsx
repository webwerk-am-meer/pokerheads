import { Flex, Text } from "@chakra-ui/react";
import { ExternalLinkCard } from "../base/ExternalLinkCard.tsx";
import { externalLinks } from "../../constants/externalLink.ts";

export function Links() {
  return (
    <Flex direction="column" gap="22px">
      <Text fontWeight="700" fontSize="24px" lineHeight="35px" align="center">
        Ein Account, für alle Plattformen
      </Text>
      <Flex
        align="stretch"
        wrap="wrap"
        justify="center"
        gap={["18px", "20px", "22px", "24px"]}
      >
        {externalLinks.map((linkInfo, index) => (
          <ExternalLinkCard {...linkInfo} variant="large" key={index} />
        ))}
      </Flex>
    </Flex>
  );
}
