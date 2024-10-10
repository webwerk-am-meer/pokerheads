import { InfoTab, InfoTabData, placeholderDescription } from "../base/tab.ts";
import cashgame from "../../assets/images/cashgame.png";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description: placeholderDescription,
    image: "",
  },
  {
    tabText: "Cashgame",
    description: placeholderDescription,
    image: cashgame,
  },
  {
    tabText: "Elo-Match",
    description: placeholderDescription,
    image: "",
  },
  {
    tabText: "Turniere",
    description: placeholderDescription,
    image: "",
  },
];

export const rankingTabs: InfoTab[] = tabData.map((tab, index) => ({
  ...tab,
  id: index,
}));
