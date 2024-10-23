import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { ImMobile } from "react-icons/im";
import { MdWebAsset } from "react-icons/md";
import { HeaderBar } from "../header/HeaderBar";
import { Footer } from "../Footer";

export function BaseText({
  text,
  fs,
  color,
  bold = false,
  center = false,
  textAlign,
  children,
  textDecoration,
  ...rest
}: {
  text?: string;
  fs?: string | number | string[];
  color?: string;
  bold?: boolean;
  center?: boolean;
  textAlign?: unknown;
  children?: any;
  textDecoration?: string;
  [key: string]: any;
}) {
  return (
    <Text
      className="Jost"
      fontSize={fs}
      color={color ?? "white"}
      fontFamily={"Jost"}
      textDecoration={textDecoration}
      fontWeight={bold ? (bold as unknown as string) : "bold"}
      textAlign={textAlign ? textAlign : "center"}
      {...rest}
    >
      {text ? text : children}
    </Text>
  );
}

export function Imprint() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bgGradient="linear(to-b, #253C4A, #0C1F2C)" className="Jost">
      <HeaderBar />
      <Stack
        w={"100%"}
        px={2}
        py={[2, 4, 5, 5]}
        mt={10}
        fontWeight={"bold"}
        fontSize={20}
        textAlign="left"
        color={"white"}
      >
        <Box h={1} w={120} />
        <HStack>
          <Stack>
            <Text fontWeight={"extrabold"}>Target KI GmbH</Text>
            <Text>
              Dubenhorst 9
              <br />
              24114 Kiel
            </Text>
            <br />
            <HStack
              cursor={"pointer"}
              onClick={() =>
                (window.location = "tel:015758308209" as unknown as Location)
              }
            >
              <ImMobile size={25} />
              <Text fontSize={20}>01575 830 8209</Text>
            </HStack>
            <HStack
              cursor={"pointer"}
              onClick={() =>
                (window.location =
                  "mailto:info@target-ki.de" as unknown as Location)
              }
            >
              <AiOutlineMail size={25} />
              <Text>info@target-ki.de</Text>
            </HStack>
            <br />
            <Text>
              Geschäftsführer:
              <br />
              David von zur Mühlen
              <br />
              Lukas Körber
            </Text>
            <br />
            <Text>
              Amtsgericht Kiel - HRB 26702 KI
              <br />
              Steuer-Nr. - 20/296/60051 Finanzamt Kiel
              <br />
              USt - IdNr.: DE367666545
            </Text>
          </Stack>
        </HStack>
        <br />
        <br />
        <Text fontSize={[25, 25, 30, 35]}>HAFTUNGSHINWEIS</Text>
        <Box h={1} w={200} />
        <br />
        <Text>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </Text>
        <br />
        <br />
        <Text fontSize={[20, 25, 30, 35]}>
          GESTALTUNG, KONZEPTION, TECHNISCHE UMSETZUNG
        </Text>
        <Box h={1} w={650} maxWidth={"70vw"} />
        <br />
        <Text>
          WebWerk am Meer <br />
          Webdesign- und Webentwicklung
          <br />
          <br />
          <HStack
            cursor="pointer"
            onClick={() =>
              (window.location =
                "https://webwerk-am-meer.de/" as unknown as Location)
            }
          >
            <MdWebAsset size={40} />
            <a
              href={"https://webwerk-am-meer.de"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              www.webwerk-am-meer.de
            </a>
          </HStack>
        </Text>
      </Stack>
      <Footer />
    </Box>
  );
}
