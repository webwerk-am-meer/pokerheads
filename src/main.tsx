import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./theme/theme.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DataSecurity } from "./components/AGB/DataSecurity.tsx";
import { Imprint } from "./components/AGB/Imprint.tsx";
import { Agb } from "./components/AGB/Agb.tsx";
import { Blogs } from "./components/blogs/Blog.tsx";
import { BlogDetail } from "./components/blogs/BlogDetail.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <App /> },
  { path: "/datenschutz", element: <DataSecurity /> },
  { path: "/impressum", element: <Imprint /> },
  { path: "/agb", element: <Agb /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blogs/:id", element: <BlogDetail /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={customTheme}>
        <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
