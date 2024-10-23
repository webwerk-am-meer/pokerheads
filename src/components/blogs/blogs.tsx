import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BaseText } from "../AGB/Imprint";
import pokerPlayVariants from "../../assets/images/Poker.avif";

const BlogBaseText = ({ children }: { children: ReactNode }) => {
  return (
    <BaseText
      textAlign={"left"}
      color={"lightgrey"}
      fs={["16px", "16px", "16px", "18px"]}
    >
      {children}
    </BaseText>
  );
};

const BlogHeadline = ({ text }: { text: string }) => {
  return (
    <BaseText
      textAlign={"left"}
      fs={["22px", "22px", "22px", "26px"]}
      bold={true}
      text={text}
    />
  );
};

export const blogs = [
  {
    id: "Verschiedene-Spielarten-von-Poker",
    date: "23.10.2024",
    title: "Verschiedene Spielarten von Poker",
    subtitle: "Ein Überblick über die beliebtesten Poker-Varianten",
    text: "Poker ist eines der beliebtesten Kartenspiele der Welt, und es gibt eine Vielzahl von Spielarten, die alle ihre eigenen Regeln und Strategien haben. Ob du ein Anfänger bist oder ein erfahrener Spieler, es lohnt sich, die Unterschiede zwischen den verschiedenen Poker-Varianten zu kennen.",
    image: pokerPlayVariants,
    fullText: (
      <Stack>
        {" "}
        <BlogHeadline text={"Die beliebtesten Poker-Varianten"} />{" "}
        <BlogBaseText>
          {" "}
          Poker hat sich über Jahrhunderte hinweg entwickelt, und heute gibt es
          viele verschiedene Varianten, die weltweit gespielt werden. Hier sind
          einige der bekanntesten und am häufigsten gespielten Poker-Varianten:{" "}
          <br /> <br /> <strong>1. Texas Hold'em</strong> - Texas Hold'em ist
          die wohl bekannteste und beliebteste Poker-Variante. Jeder Spieler
          erhält zwei verdeckte Karten (Hole Cards), und fünf
          Gemeinschaftskarten (Community Cards) werden nach und nach aufgedeckt.
          Ziel ist es, die beste Fünf-Karten-Kombination zu bilden. Hold'em
          bietet eine Mischung aus Strategie, Psychologie und Glück und wird oft
          in großen Turnieren wie der World Series of Poker gespielt. <br />{" "}
          <br /> <strong>2. Omaha</strong> - Omaha ist Texas Hold'em sehr
          ähnlich, allerdings erhält jeder Spieler vier Hole Cards anstatt zwei.
          Spieler müssen genau zwei ihrer Hole Cards und drei der fünf
          Gemeinschaftskarten verwenden, um ihre Hand zu bilden. Omaha wird oft
          als eine Variante für fortgeschrittenere Spieler angesehen, da sie
          komplexere Strategien erfordert. <br /> <br />{" "}
          <strong>3. Seven Card Stud</strong> - In dieser Variante gibt es keine
          Gemeinschaftskarten. Jeder Spieler erhält insgesamt sieben Karten, von
          denen drei verdeckt und vier offen sind. Ziel ist es, die beste
          Fünf-Karten-Hand aus diesen sieben Karten zu formen. Seven Card Stud
          war vor dem Aufstieg von Texas Hold'em die dominierende
          Poker-Variante. <br /> <br /> <strong>4. Razz</strong> - Razz ist eine
          Lowball-Version von Seven Card Stud, bei der das Ziel darin besteht,
          die niedrigste mögliche Hand zu bilden. Hier ist es wichtig, schlechte
          Hände zu halten, was es zu einer interessanten und ungewöhnlichen
          Variante macht. <br /> <br /> <strong>5. 5-Card Draw</strong> - Diese
          Variante wird oft in privaten Runden gespielt und ist sehr einfach zu
          lernen. Jeder Spieler erhält fünf Karten, kann eine bestimmte Anzahl
          davon tauschen und muss am Ende die beste Hand bilden. Die Einfachheit
          von 5-Card Draw macht es zu einer perfekten Variante für Einsteiger.{" "}
          <br /> <br /> <strong>6. Pineapple</strong> - Pineapple ist eine
          Variante, die Texas Hold'em ähnelt, jedoch erhält jeder Spieler drei
          Hole Cards anstelle von zwei. Eine dieser Karten muss nach der ersten
          Setzrunde abgeworfen werden. Es gibt verschiedene Versionen von
          Pineapple, wie Crazy Pineapple, bei dem man die dritte Karte später im
          Spiel abwerfen muss.{" "}
        </BlogBaseText>{" "}
        <BlogBaseText>
          {" "}
          Jede dieser Poker-Varianten hat ihren eigenen Reiz und spricht
          unterschiedliche Spielertypen an. Während Texas Hold'em ideal für
          Turniere ist, bieten Spiele wie Omaha und Razz komplexere Strategien,
          die erfahrenere Spieler schätzen. Egal für welche Variante man sich
          entscheidet, Poker bleibt ein faszinierendes Spiel, das sowohl
          Geschick als auch Glück erfordert.{" "}
        </BlogBaseText>{" "}
      </Stack>
    ),
    categories: ["Poker", "Kartenspiele", "Strategie"],
    tags: [
      "Poker",
      "Texas Hold'em",
      "Omaha",
      "Seven Card Stud",
      "Razz",
      "5-Card Draw",
      "Pineapple",
    ],
  },
];

export function getBlogIDs() {
  let test = blogs.map((blog) => blog.id);
  console.log(test);
  return test;
}
