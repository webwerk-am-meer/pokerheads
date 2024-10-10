import { InfoTab, InfoTabData, placeholderDescription } from "../base/tab.ts";
import daily from "../../assets/images/daily_tournament.png";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description: placeholderDescription,
    image: "",
  },
  {
    tabText: "Tages Turniere",
    description: placeholderDescription,
    image: daily,
  },
  {
    tabText: "Monats Turniere",
    description: placeholderDescription,
    image: "",
  },
];

export const tournamentTabs: InfoTab[] = tabData.map((tab, index) => ({
  ...tab,
  id: index,
}));
