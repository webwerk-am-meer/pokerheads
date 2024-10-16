import { Flex, Text } from "@chakra-ui/react";
import {
  ExternalLinkCard,
  ExternalLinkCircle,
} from "../base/ExternalLinkCard.tsx";
import { externalLinks } from "../../constants/externalLink.ts";

export function Links() {
  return (
    <Flex direction="column" gap="22px">
      <Text fontWeight="700" fontSize="24px" lineHeight="35px" align="center">
        Ein Account, für alle Plattformen
      </Text>
      <Flex
        display={["none", "flex"]}
        align="stretch"
        wrap="wrap"
        justify="center"
        gap={["18px", "20px", "22px", "24px"]}
      >
        {externalLinks.map((linkInfo, index) => (
          <ExternalLinkCard {...linkInfo} variant="large" key={index} />
        ))}
      </Flex>
      <Flex
        display={["flex", "none"]}
        maxWidth={["", "410px", "inherit"]}
        justify="center"
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
    </Flex>
  );
}
