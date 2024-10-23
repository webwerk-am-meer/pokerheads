import { Box, Center, Stack } from "@chakra-ui/react";
import { BaseText } from "./Imprint";
import { HeaderBar } from "../header/HeaderBar";
import { Footer } from "../Footer";

export function Agb() {
  return (
    <Box bgGradient="linear(to-b, #253C4A, #0C1F2C)" className="Jost">
      <HeaderBar />
      <Stack
        w={"100%"}
        bg={"bg"}
        px={10}
        py={[2, 4, 5, 5]}
        mt={10}
        fontWeight={"bold"}
        fontSize={20}
        textAlign="left"
        color={"white"}
      >
        <Center>
          <BaseText
            text={"Allgemeine Geschäftsbedingungen (AGB)"}
            bold
            as={"h1"}
            fs={"xl"}
            color={"white"}
          />
        </Center>
        <Box textAlign="left">
          <BaseText textAlign={"left"}>
            Diese Website wird von Target KI GmbH betrieben. Überall auf der
            Webseite beziehen sich die Begriffe "wir", "uns" und "unsere/e" auf
            Target KI GmbH. Target KI GmbH bietet diese Website, einschließlich
            aller Informationen, Tools und Dienste, die auf dieser Website
            verfügbar sind, Ihnen, dem Benutzer, unter der Bedingung an, dass
            Sie alle hier angegebenen Bedingungen, Konditionen, Richtlinien und
            Hinweise akzeptieren.
          </BaseText>
          <br />
          <BaseText textAlign={"left"}>
            1. Nutzungsbedingungen**: Durch den Zugriff und die Nutzung dieser
            Webseite erklären Sie sich mit diesen AGB sowie unserer
            Datenschutzrichtlinie einverstanden. Falls Sie mit diesen
            Bedingungen nicht einverstanden sind, bitten wir Sie, diese Webseite
            nicht zu nutzen.
          </BaseText>
          <br />
          <BaseText textAlign={"left"}>
            2. Geistiges Eigentum: Alle Inhalte auf dieser Webseite,
            einschließlich Texte, Grafiken, Logos, Bilder, Videos, Audiodateien,
            und Software, sind urheberrechtlich geschützt und gehören dem
            Betreiber der Webseite oder den jeweiligen Rechteinhabern. Die
            Vervielfältigung, Verbreitung oder Verwendung dieser Inhalte ohne
            ausdrückliche Genehmigung ist untersagt.
          </BaseText>
          <br />
          <BaseText textAlign={"left"}>
            3. Haftungsausschluss: Diese Webseite dient ausschließlich zu
            Informationszwecken. Der Betreiber übernimmt keine Gewähr für die
            Aktualität, Richtigkeit, Vollständigkeit oder Qualität der
            bereitgestellten Informationen. Jegliche Haftung für Schäden
            materieller oder immaterieller Art, die durch die Nutzung oder
            Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung
            fehlerhafter und unvollständiger Informationen verursacht wurden,
            ist ausgeschlossen.
          </BaseText>
          <br />
          <BaseText textAlign={"left"}>
            4. Verlinkungen: Diese Webseite kann Links zu externen Webseiten
            Dritter enthalten, auf deren Inhalte der Betreiber keinen Einfluss
            hat. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente
            inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
            Anhaltspunkte einer Rechtsverletzung jedoch nicht zumutbar. Bei
            bekannt werden von Rechtsverletzungen werden wir derartige Links
            umgehend entfernen.
          </BaseText>
          <br />
          <BaseText textAlign={"left"}>
            5. Änderungen: Der Betreiber behält sich das Recht vor, diese AGB
            sowie die Inhalte dieser Webseite jederzeit und ohne Ankündigung zu
            ändern, zu ergänzen oder zu löschen.
          </BaseText>
          <br />
          <BaseText textAlign={"left"}>
            6. Anwendbares Recht und Gerichtsstand: Diese AGB unterliegen dem
            Recht der Bundesrepublik Deutschland. Ausschließlicher Gerichtsstand
            für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB und
            der Nutzung dieser Webseite ist der Sitz des Betreibers, soweit der
            Nutzer Unternehmer im Sinne des § 14 BGB ist.
          </BaseText>
          <br />
          <BaseText textAlign={"left"}>
            Wenn Sie Fragen zu diesen AGB haben, kontaktieren Sie uns bitte
            unter <a href="mailto:info@target-ki.de">info@target-ki.de</a>.
          </BaseText>
          <br />
          Stand: 10.05.2024
        </Box>
      </Stack>
      <Footer />
    </Box>
  );
}
