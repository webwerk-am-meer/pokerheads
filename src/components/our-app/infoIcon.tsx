import { ReactNode } from "react";
import { PlacementWithLogical } from "@chakra-ui/react";

type InfoIcon = {
  top: string;
  left: string;
  content: ReactNode;
  title: string;
  popoverPlacement?: PlacementWithLogical;
  smallPopoverPlacement?: PlacementWithLogical;
};

export const infoIcons: InfoIcon[] = [
  {
    title: "News",
    top: "14.188%",
    left: "90.262%",
    content: "Aktuelle nachrichten aus der Pokerwelt und von Pokerheads",
    popoverPlacement: "right-end",
    smallPopoverPlacement: "top",
  },
  {
    title: "Elo-match",
    top: "30%",
    left: "44.569%",
    content:
      "Spiele ein Elo-Match gegen andere Spieler auf deinem Nivo und steige in der Rangliste auf",
    popoverPlacement: "left-end",
    smallPopoverPlacement: "top",
  },
  {
    title: "Cashgame",
    top: "30%",
    left: "90.262%",
    content: "Cashgame ohne Echtgeld? Das gibst bei uns! Spiele jetzt ein Cashgame Match und beweise, dass du der beste bist!",
    popoverPlacement: "right-end",
    smallPopoverPlacement: "top-end",
  },
  {
    title: "Monatspreis",
    top: "38.181%",
    left: "44.569%",
    content: "Spiele unser Monatliches Heads Up Poker Turnier und gewinne tolle Preise",
    popoverPlacement: "left-start",
    smallPopoverPlacement: "bottom",
  },
  {
    title: "Daily Chipleader",
    top: "38.181%",
    left: "90.262%",
    content: "Gewinne in unserem täglichen Heads Up Poker Turnier jeden tag neue Preise",
    popoverPlacement: "right-start",
    smallPopoverPlacement: "bottom-end",
  },
  {
    title: "Basic-Quiz",
    top: "54.909%",
    left: "44.569%",
    content: "Trainiere in unserem Basic-Quiz die Grundlagen von Poker.",
    popoverPlacement: "left-end",
    smallPopoverPlacement: "top",
  },
  {
    title: "Odds-Quiz",
    top: "54.909%",
    left: "90.262%",
    content: "In unserem Odds-Quiz kannst du dein Verständnis für Wahrscheinlichkeiten und Pot Odds auf die Probe stellen.",
    popoverPlacement: "right-end",
    smallPopoverPlacement: "top-end",
  },
  {
    title: "Training",
    top: "60.545%",
    left: "44.569%",
    content: "Im Trainings modus kannst du gegen unserem Poker Bot spielen und dein Spiel verbessern",
    popoverPlacement: "bottom-end",
  },
  {
    title: "Hand-Analyse",
    top: "60.545%",
    left: "90.262%",
    content: "Analysiere verschiedene Szenarios und verbessere dein Spiel anhand unserer Hand-Analyse",
    popoverPlacement: "bottom-start",
  },
  {
    title: "Home",
    top: "89.818%",
    left: "20.974%",
    content: "Homescreen",
    popoverPlacement: "top",
  },
  {
    title: "Freunde",
    top: "89.818%",
    left: "43.071%",
    content: "Spiele mit deinen Freunden. Sowohl Cashgame als auch Heads Up Poker",
    popoverPlacement: "top",
  },
  {
    title: "Profil",
    top: "89.818%",
    left: "62.172%",
    content: "Übersicht über dein Profil, deine letzten Spiele und deine Statistiken",
    popoverPlacement: "top",
  },
  {
    title: "Rangliste",
    top: "89.818%",
    left: "84.267%",
    content: "Messe dich mit anderen Spielern und steige in der Rangliste auf",
    popoverPlacement: "top",
  },
];
