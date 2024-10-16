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
    title: "FAQ?",
    top: "14.188%",
    left: "90.262%",
    content: "Oft gestellte Fragen",
    popoverPlacement: "right-end",
    smallPopoverPlacement: "left-end",
  },
  {
    title: "Elo-match",
    top: "30%",
    left: "44.569%",
    content: "Spiele ein Elo-Match...",
    popoverPlacement: "left-end",
    smallPopoverPlacement: "top",
  },
  {
    title: "Cashgame",
    top: "30%",
    left: "90.262%",
    content: "Ein Cashgame ist...",
    popoverPlacement: "right-end",
    smallPopoverPlacement: "top-end",
  },
  {
    title: "Monatspreis",
    top: "38.181%",
    left: "44.569%",
    content: "Sieh dir den aktuellen Monatspreis an...",
    popoverPlacement: "left-start",
    smallPopoverPlacement: "bottom",
  },
  {
    title: "Daily Chipleader",
    top: "38.181%",
    left: "90.262%",
    content: "...",
    popoverPlacement: "right-start",
    smallPopoverPlacement: "bottom-end",
  },
  {
    title: "Basic-Quiz",
    top: "54.909%",
    left: "44.569%",
    content: "...",
    popoverPlacement: "left-end",
    smallPopoverPlacement: "top",
  },
  {
    title: "Odds-Quiz",
    top: "54.909%",
    left: "90.262%",
    content: "...",
    popoverPlacement: "right-end",
    smallPopoverPlacement: "top-end",
  },
  {
    title: "Training",
    top: "60.545%",
    left: "44.569%",
    content: "...",
    popoverPlacement: "bottom-end",
  },
  {
    title: "Hand-Analyse",
    top: "60.545%",
    left: "90.262%",
    content: "...",
    popoverPlacement: "bottom-start",
  },
  {
    title: "Home",
    top: "89.818%",
    left: "20.974%",
    content: "...",
    popoverPlacement: "top",
  },
  {
    title: "Kontakte?",
    top: "89.818%",
    left: "43.071%",
    content: "...",
    popoverPlacement: "top",
  },
  {
    title: "Profil",
    top: "89.818%",
    left: "62.172%",
    content: "...",
    popoverPlacement: "top",
  },
  {
    title: "Rangliste",
    top: "89.818%",
    left: "84.267%",
    content: "...",
    popoverPlacement: "top",
  },
];
