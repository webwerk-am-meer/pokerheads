import browsers from "../assets/images/browsers.svg";
import playstore from "../assets/images/playstore.png";
import apple from "../assets/images/apple.png";

export type ExternalLink = {
  image: string;
  topText: string;
  bottomText: string;
  link: string;
};

export const externalLinks: ExternalLink[] = [
  {
    topText: "Spiele im",
    bottomText: "Browser",
    image: browsers,
    link: "",
  },
  {
    topText: "Download im",
    bottomText: "Play store",
    image: playstore,
    link: "https://play.google.com",
  },
  {
    topText: "Download im",
    bottomText: "App store",
    image: apple,
    link: "https://www.apple.com/de/app-store/",
  },
];
