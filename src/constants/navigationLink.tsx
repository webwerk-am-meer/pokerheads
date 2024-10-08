import { ReactNode } from "react";

export type NavigationLink = {
  name: string;
  link: string;
  content: ReactNode;
};

export const navigationLinks: NavigationLink[] = [
  {
    name: "Start",
    link: "start",
    content: null,
  },
  {
    name: "Rangliste",
    link: "rangliste",
    content: null,
  },
  {
    name: "Training",
    link: "training",
    content: null,
  },
  {
    name: "App",
    link: "app",
    content: null,
  },
];
