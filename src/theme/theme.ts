import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    main: "#F52967",
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
      "*": {
        scrollbarColor: "#5e93a3 #0c202d",
      },
    },
  },
});
