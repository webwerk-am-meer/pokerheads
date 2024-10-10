import { InfoTabData, placeholderDescription, toIndexed } from "../base/tab.ts";
import daily from "../../assets/images/daily_tournament.svg";

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

export const tournamentTabs = toIndexed(tabData);
