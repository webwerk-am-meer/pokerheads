import oddsQuizImage from "../../assets/images/odds_quiz.webp";
import basicQuizImage from "../../assets/images/BasicQuizzPhone.png";
import trainingQuizImage from "../../assets/images/TrainingPhone.png";
import scenarioSolverImage from "../../assets/images/ScenarioPhone.png";
import { InfoTab, InfoTabData } from "../base/tab.ts";

const tabData: InfoTabData[] = [
  {
    tabText: "Allgemein",
    description:
      "Willkommen in der Pokerheads Akademie – Deinem Weg zum Heads Up Poker-Meister! In unserer Akademie findest du alles, was du über das Pokerspiel wissen musst – von den grundlegenden Regeln bis hin zu fortgeschrittenen Strategien und den verschiedenen Spielvarianten. Ob du gerade erst mit dem Pokern anfängst oder bereits ein erfahrener Spieler bist, unsere Lernplattform bietet dir wertvolle Einblicke und neues Wissen. Schritt für Schritt lernst du, wie du deine Gegner analysierst, mathematisch fundierte Entscheidungen triffst und deine Fähigkeiten im Heads Up Poker perfektionierst. Starte jetzt mit der Pokerheads Akademie und bring dein Spiel auf das nächste Level!",
    image: "",
  },
  {
    tabText: "Basis-Quiz",
    description:
      'Teste dein Wissen über die Grundlagen des Pokerspiels in unserem "Basis-Quiz"! Man sagt immer, dass die Grundlagen der Schlüssel zum Erfolg sind – und beim Pokern ist es nicht anders. In diesem Quiz erwarten dich Fragen zu den wichtigsten Aspekten des Spiels: von den Pokerregeln über die verschiedenen Handränge bis hin zu den grundlegenden Strategien, die jeder Spieler kennen sollte. Ob Anfänger oder Fortgeschrittener, das Basis-Quiz hilft dir, dein Wissen aufzufrischen und sicherzustellen, dass du die Basics des Pokerns meisterst. Bist du bereit, dein Können unter Beweis zu stellen?',
    image: basicQuizImage,
  },
  {
    tabText: "Odds-Quiz",
    description:
      'Teste dein Wissen über die Wahrscheinlichkeiten im Poker in unserem "Odds-Quiz"! Poker ist nicht nur ein Spiel der Karten, sondern auch der Mathematik. In unserem Odds-Quiz kannst du dein Verständnis für Wahrscheinlichkeiten und Pot Odds auf die Probe stellen. Lerne, wie du deine Gewinnchancen in jeder Spielsituation richtig einschätzt und mathematisch fundierte Entscheidungen triffst. Dieses Quiz ist ideal für Spieler, die ihre Pokerfähigkeiten durch ein besseres Verständnis der Zahlen hinter dem Spiel auf das nächste Level bringen möchten. Wie gut beherrschst du die Mathematik des Pokerns?',
    image: oddsQuizImage,
  },
  {
    tabText: "Training",
    description:
      'Verbessere dein Spiel im "Trainingsmodus" – spiele gegen unseren Bot! Hier findest du verschiedene Trainingsmöglichkeiten, um dein Pokerspiel zu verbessern, indem du direkt gegen unseren intelligenten Poker-Bot antrittst. Der Bot simuliert realistische Gegner und hilft dir, deine Strategien in echten Spielsituationen zu verfeinern. Ob du deine Taktiken testen, neue Spielzüge ausprobieren oder deine Reaktionen unter Druck verbessern möchtest – unser Trainingsmodus bietet dir eine stressfreie Umgebung, um an deinem Spiel zu feilen. Perfekt, um dich auf das nächste Heads Up Match vorzubereiten!',
    image: trainingQuizImage,
  },
  {
    tabText: "Scenario-Solver",
    description:
      'Meistere verschiedene Spielsituationen mit unserem "Scenario Solver"! In diesem Modus kannst du dir  realistische Pokerszenarien erstellen, die dir dabei helfen, deine Entscheidungsfindung am Tisch zu schärfen. Egal, ob es um schwierige All-in-Situationen, knifflige Bluffs oder das Verwalten deiner Chips geht – der Scenario Solver fordert dich heraus, in jeder Situation die beste Entscheidung zu treffen. Perfekt, um deine strategischen Fähigkeiten zu verbessern und dein Spiel in echten Pokermatches auf das nächste Level zu heben. Bist du bereit, dein Denken auf die Probe zu stellen?',
    image: scenarioSolverImage,
  },
];

export const academyTabs: InfoTab[] = tabData.map((tab, index) => ({
  ...tab,
  id: index,
}));
