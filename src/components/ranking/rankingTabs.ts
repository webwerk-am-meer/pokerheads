import { InfoTab, InfoTabData } from "../base/tab.ts";
import cashgame from "../../assets/images/cashgame.webp";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description:
      "Behalte deinen Fortschritt im Blick – mit unseren Ranglisten! In jeder unserer Spielmodi – ob Elo-Matches, Cashgame oder Turniere – kannst du dich mit anderen Spielern messen und deinen Platz auf der Rangliste verbessern. Unser Ranking basiert auf dem Elo-System, das dafür sorgt, dass du gegen Spieler auf ähnlichem Niveau antrittst und für starke Leistungen belohnt wirst. Zeige dein Können, steig in den Ranglisten auf und werde einer der besten Spieler unserer Plattform. Verfolge deine Entwicklung und kämpfe um den Spitzenplatz in deiner Lieblingsdisziplin!",
    image: "",
  },
  {
    tabText: "Cashgame",
    description:
      "Steige in unserer Cashgame-Rangliste auf und zeige dein Können! Im Cashgame zählt jeder gewonnene Pot und jede geschickte Entscheidung. Unsere Rangliste basiert auf dem Elo-System, das deine Leistung gegen andere Cashgame-Spieler bewertet und dir ermöglicht, gegen Gegner deines Levels anzutreten. Je erfolgreicher du spielst, desto weiter kletterst du in der Rangliste nach oben. Beweise, dass du die Nerven und das Geschick hast, um zu den besten Cashgame-Spielern zu gehören, und erobere deinen Platz an der Spitze!",
    image: cashgame,
  },
  {
    tabText: "Elo-Match",
    description:
      "Erkämpfe dir deinen Platz in der Elo-Rangliste! In unseren Elo-Matches trittst du gegen andere Spieler an und kannst dein strategisches Geschick unter Beweis stellen. Deine Position in der Rangliste basiert auf dem Elo-System, das dafür sorgt, dass du durch Siege gegen starke Gegner schneller aufsteigst. Zeig, dass du in direkten Duellen die Nase vorn hast, und steigere dein Elo-Rating mit jeder gewonnenen Partie. Setze deine Fähigkeiten ein, um in der Rangliste aufzusteigen und zu den Top-Spielern zu gehören!",
    image: "",
  },
  {
    tabText: "Turniere",
    description:
      "Spiele in unseren Turnieren und gewinne tolle Preise, und steige in der Rangliste auf.",
    image: "",
  },
];

export const rankingTabs: InfoTab[] = tabData.map((tab, index) => ({
  ...tab,
  id: index,
}));
