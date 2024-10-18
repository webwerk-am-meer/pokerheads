import { InfoTab, InfoTabData, placeholderDescription } from "../base/tab.ts";
import cashgame from "../../assets/images/cashgame.webp";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description: placeholderDescription,
    image: "",
  },
  {
    tabText: "Cashgame",
    description: 'Spiele Cashgame und trete gegen andere Spieler an, um in der Rangliste aufzusteigen.',
    image: cashgame,
  },
  {
    tabText: "Elo-Match",
    description: 'Spiele gegen andere Spieler in einem Elo-Match und steige in der Rangliste auf.',
    image: "",
  },
  {
    tabText: "Turniere",
    description: 'Spiele in unseren Turnieren und gewinne tolle Preise, und steige in der Rangliste auf.',
    image: "",
  },
];

export const rankingTabs: InfoTab[] = tabData.map((tab, index) => ({
  ...tab,
  id: index,
}));
