import "./assets/css/main.css";
import { useLocation } from "react-router-dom";
import { DataSecurity } from "./components/AGB/DataSecurity.tsx";
import { Imprint } from "./components/AGB/Imprint.tsx";
import { HomePage } from "./components/HomePage.tsx";
import { Agb } from "./components/AGB/Agb.tsx";
import { ReactNode, useEffect, useMemo } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Footer } from "./components/Footer.tsx";
import { allDestinies } from "./components/header/navigationLinks.ts";
import { HeaderBar } from "./components/header/HeaderBar.tsx";

export function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById(pathname)?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <Stack
      overflow="clip"
      minHeight="100vh"
      padding={["10px", "15px", "20px", "25px"]}
      justify="space-between"
      bgGradient="linear(to-b, #253C4A, #0C1F2C)"
      gap={["20px", "20px", "15px", "10px"]}
    >
      <Box>
        <HeaderBar />
        <DisplayRoute path={allDestinies.map((destiny) => destiny.link)}>
          <HomePage />
        </DisplayRoute>
        <DisplayRoute path="/agb">
          <Agb />
        </DisplayRoute>
        <DisplayRoute path="/datenschutz">
          <DataSecurity />
        </DisplayRoute>
        <DisplayRoute path="/impressum">
          <Imprint />
        </DisplayRoute>
      </Box>

      <Footer />
    </Stack>
  );
}

function DisplayRoute({
  path,
  children,
}: {
  path: string[] | string;
  children: ReactNode;
}) {
  const { pathname } = useLocation();
  const shouldDisplay = Array.isArray(path)
    ? path.includes(pathname)
    : pathname === path;

  const component = useMemo(() => children, []);

  return <Box display={shouldDisplay ? "auto" : "none"}>{component}</Box>;
}
