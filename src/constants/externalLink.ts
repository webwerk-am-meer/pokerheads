import browsers from "../assets/images/browsers.svg";
import playstore from "../assets/images/playstore.png";
import apple from "../assets/images/apple.png";

export type ExternalLink = {
  image: string;
  topText: string;
  bottomText: string;
};

export const externalLinks: ExternalLink[] = [
  {
    topText: "Spiele im",
    bottomText: "Browser",
    image: browsers,
  },
  {
    topText: "Download im",
    bottomText: "Play store",
    image: playstore,
  },
  {
    topText: "Download im",
    bottomText: "App store",
    image: apple,
  },
];
