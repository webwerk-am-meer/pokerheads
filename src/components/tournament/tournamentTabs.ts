import { InfoTab, InfoTabData, placeholderDescription } from "../base/tab.ts";
import daily from "../../assets/images/daily_tournament.webp";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description: 'Allgemein',
    image: "",
  },
  {
    tabText: "Tages Turniere",
    description: 'Spiele mit und gegen die besten Spieler in unseren Tages Turnieren. Und gewinne tolle Preise.',
    image: daily,
  },
  {
    tabText: "Monats Turniere",
    description: 'Spiele mit und gegen die besten Spieler in unseren Monats Turnieren. Und gewinne tolle Preise.',
    image: "",
  },
];

export const tournamentTabs: InfoTab[] = tabData.map((tab, index) => ({
  ...tab,
  id: index,
}));
