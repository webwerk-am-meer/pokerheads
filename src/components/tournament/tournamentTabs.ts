import { InfoTab, InfoTabData } from "../base/tab.ts";
import daily from "../../assets/images/daily_tournament.webp";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description:
      'Stelle dich der Herausforderung im "Turniermodus" und gewinne echte Preise! In unserem Turniermodus kannst du täglich und monatlich an spannenden Pokerturnieren gegen andere Spieler teilnehmen. Tritt in herausfordernden Matches an und kämpfe um den Sieg, während du deine Pokerfähigkeiten unter Beweis stellst. Egal, ob du an den täglichen Turnieren teilnimmst, um regelmäßig deine Skills zu verbessern, oder dich für die monatlichen Wettbewerbe qualifizierst, bei denen es um größere Preise geht – bei uns hast du die Chance, echte Preise zu gewinnen und dein Können gegen die besten Spieler zu messen. Mach mit und erlebe den Nervenkitzel unserer Pokerturniere!',
    image: "",
  },
  {
    tabText: "Tages Turniere",
    description:
      "Nimm teil an unseren täglichen Turnieren und zeige dein Können! Spiele gegen die besten Spieler in unseren täglichen Turnieren und erlebe spannende Poker-Action. Hier hast du jeden Tag die Chance, dein Spiel zu perfektionieren, dich mit anderen zu messen und großartige Preise zu gewinnen. Ob du auf der Suche nach regelmäßiger Herausforderung bist oder einfach deine Skills unter Wettkampfbedingungen testen möchtest – unsere Tages-Turniere bieten dir die perfekte Gelegenheit dazu. Bist du bereit, heute als Sieger hervorzugehen?",
    image: daily,
  },
  {
    tabText: "Monats Turniere",
    description:
      "Steige ein in unser monatliches Turnier und kämpfe um die größten Preise! Einmal im Monat hast du die Chance, an unserem exklusiven Turnier teilzunehmen und dich mit den besten Spielern zu messen. In diesen hochkarätigen Matches geht es nicht nur um Ehre, sondern auch um die attraktivsten Preise, die wir zu bieten haben. Zeig, was du gelernt hast, und spiele dich an die Spitze des Teilnehmerfelds. Unsere monatlichen Turniere bieten dir die ultimative Poker-Herausforderung – bist du bereit, dein Können unter Beweis zu stellen und als Champion hervorzugehen?",
    image: "",
  },
];

export const tournamentTabs: InfoTab[] = tabData.map((tab, index) => ({
  ...tab,
  id: index,
}));
