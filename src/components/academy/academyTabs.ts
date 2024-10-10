import oddsQuizImage from "../../assets/images/odds_quiz.svg";
import { InfoTabData, placeholderDescription, toIndexed } from "../base/tab.ts";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description: placeholderDescription,
    image: "",
  },
  {
    tabText: "Basis-Quiz",
    description: placeholderDescription,
    image: "",
  },
  {
    tabText: "Odds-Quiz",
    description: placeholderDescription,
    image: oddsQuizImage,
  },
  {
    tabText: "Training",
    description: placeholderDescription,
    image: "",
  },
  {
    tabText: "Scenario-Solver",
    description: placeholderDescription,
    image: "",
  },
];

export const academyTabs = toIndexed(tabData);
