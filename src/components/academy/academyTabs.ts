import oddsQuizImage from "../../assets/images/odds_quiz.webp";
import basicQuizImage from "../../assets/images/BasicQuizzPhone.png";
import trainingQuizImage from "../../assets/images/TrainingPhone.png";
import scenarioSolverImage from "../../assets/images/ScenarioPhone.png";
import { InfoTab, InfoTabData, placeholderDescription } from "../base/tab.ts";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description:
      "Hier findest du alle Informationen zu den Grundlagen des Pokerspiels. Von den Regeln bis hin zu den verschiedenen Spielvarianten.",
    image: "",
  },
  {
    tabText: "Basis-Quiz",
    description:
      'Teste dein Wissen über die Grundlagen des Pokerspiels in unserem "Basis-Quiz".',
    image: basicQuizImage,
  },
  {
    tabText: "Odds-Quiz",
    description:
      'Teste dein Wissen über die Wahrscheinlichkeiten im Poker in unserem "Odds-Quiz".',
    image: oddsQuizImage,
  },
  {
    tabText: "Training",
    description:
      "Hier findest du verschiedene Trainingsmöglichkeiten, um dein Pokerspiel zu verbessern.",
    image: trainingQuizImage,
  },
  {
    tabText: "Scenario-Solver",
    description:
      "Hier findest du verschiedene Szenarien, die du lösen kannst, um dein Pokerspiel zu verbessern.",
    image:scenarioSolverImage,
  },
];

export const academyTabs: InfoTab[] = tabData.map((tab, index) => ({
  ...tab,
  id: index,
}));
