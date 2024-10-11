import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/theme.ts";
import { paddingBottom, paddingTop, paddingX } from "./constants/spacing.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <Box
        minHeight="100vh"
        paddingBottom={paddingBottom}
        paddingX={paddingX}
        paddingTop={paddingTop}
        bgGradient="linear(to-b, #253C4A, #0C1F2C)"
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  </StrictMode>,
);
