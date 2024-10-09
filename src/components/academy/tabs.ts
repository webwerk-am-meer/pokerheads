import oddsQuizImage from "../../assets/images/odds_quiz.svg";

type InfoTabData = {
  tabText: string;
  description: string;
  image: string;
};

type InfoTab = InfoTabData & { id: number };

const placeholderDescription =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.\n" +
  "\n" +
  "consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

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

export const academyTabs: InfoTab[] = tabData.map((t, index) => ({
  ...t,
  id: index,
}));
