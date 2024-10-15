import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    main: "#F52967",
    mainHover: "#ba2257",
    dark: "#0c202d",
    hover: "#182b3a",
    light: "#263D4B",
  },
  components: {
    Text: {
      baseStyle: {
        color: "white",
        fontFamily: "Jost",
      },
    },
  },
  styles: {
    global: {
      "*::-webkit-scrollbar": {
        bgColor: "#0c202d",
      },
      "*::-webkit-scrollbar-thumb": {
        bgColor: "#5e93a3",
      },
    },
  },
});
