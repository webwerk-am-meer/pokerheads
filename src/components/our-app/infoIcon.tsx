import { ReactNode } from "react";
import { PlacementWithLogical } from "@chakra-ui/react";

type InfoIcon = {
  top: number;
  left: number;
  content: ReactNode;
  title: string;
  popoverPlacement?: PlacementWithLogical;
};

export const infoIcons: InfoIcon[] = [
  {
    title: "FAQ?",
    top: 78,
    left: 241,
    content: "Oft gestellte Fragen",
    popoverPlacement: "right-end",
  },
  {
    title: "Elo-match",
    top: 165,
    left: 119,
    content: "Spiele ein Elo-Match...",
    popoverPlacement: "left-end",
  },
  {
    title: "Cashgame",
    top: 165,
    left: 241,
    content: "Ein Cashgame ist...",
    popoverPlacement: "right-end",
  },
  {
    title: "Monatspreis",
    top: 210,
    left: 119,
    content: "Sieh dir den aktuellen Monatspreis an...",
    popoverPlacement: "left-start",
  },
  {
    title: "Daily Chipleader",
    top: 210,
    left: 241,
    content: "...",
    popoverPlacement: "right-start",
  },
  {
    title: "Basic-Quiz",
    top: 302,
    left: 119,
    content: "...",
    popoverPlacement: "left-end",
  },
  {
    title: "Odds-Quiz",
    top: 302,
    left: 241,
    content: "...",
    popoverPlacement: "right-end",
  },
  {
    title: "Training",
    top: 333,
    left: 119,
    content: "...",
    popoverPlacement: "bottom-end",
  },
  {
    title: "Hand-Analyse",
    top: 333,
    left: 241,
    content: "...",
    popoverPlacement: "bottom-start",
  },
  {
    title: "Home",
    top: 494,
    left: 56,
    content: "...",
    popoverPlacement: "top",
  },
  {
    title: "Kontakte?",
    top: 494,
    left: 115,
    content: "...",
    popoverPlacement: "top",
  },
  {
    title: "Profil",
    top: 494,
    left: 166,
    content: "...",
    popoverPlacement: "top",
  },
  {
    title: "Rangliste",
    top: 494,
    left: 225,
    content: "...",
    popoverPlacement: "top",
  },
];
