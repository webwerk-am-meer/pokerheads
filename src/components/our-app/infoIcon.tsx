import { ReactNode } from "react";

type InfoIcon = {
  top: number;
  left: number;
  content: ReactNode;
  title: string;
};

export const infoIcons: InfoIcon[] = [
  {
    title: "FAQ?",
    top: 78,
    left: 241,
    content: "Oft gestellte Fragen",
  },
  {
    title: "Elo-match",
    top: 165,
    left: 119,
    content: "Spiele ein Elo-Match...",
  },
  {
    title: "Cashgame",
    top: 165,
    left: 241,
    content: "Ein Cashgame ist...",
  },
  {
    title: "Monatspreis",
    top: 210,
    left: 119,
    content: "Sieh dir den aktuellen Monatspreis an...",
  },
  {
    title: "Daily Chipleader",
    top: 210,
    left: 241,
    content: "...",
  },
  {
    title: "Basic-Quiz",
    top: 302,
    left: 119,
    content: "...",
  },
  {
    title: "Odds-Quiz",
    top: 302,
    left: 241,
    content: "...",
  },
  {
    title: "Training",
    top: 333,
    left: 119,
    content: "...",
  },
  {
    title: "Hand-Analyse",
    top: 333,
    left: 241,
    content: "...",
  },
  {
    title: "Home",
    top: 494,
    left: 56,
    content: "...",
  },
  {
    title: "Kontakte?",
    top: 494,
    left: 115,
    content: "...",
  },
  {
    title: "Profil",
    top: 494,
    left: 166,
    content: "...",
  },
  {
    title: "Rangeliste",
    top: 494,
    left: 225,
    content: "...",
  },
];
