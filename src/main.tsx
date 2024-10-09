import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { App } from "./App.tsx";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/theme.ts";
import "./assets/css/main.css";
import { paddingBottom, paddingTop, paddingX } from "./constants/spacing.ts";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <Navigate to="/" /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
      <Box
        paddingBottom={paddingBottom}
        paddingX={paddingX}
        paddingTop={paddingTop}
        bgGradient="linear(to-b, #253C4A, #0C1F2C)"
      >
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  </StrictMode>,
);
