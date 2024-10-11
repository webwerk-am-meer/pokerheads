import "./assets/css/main.css";
import { useLocation } from "react-router-dom";
import { DataSecurity } from "./components/AGB/DataSecurity.tsx";
import { Imprint } from "./components/AGB/Imprint.tsx";
import { Home } from "./components/HomePage.tsx";
import { Agb } from "./components/AGB/Agb.tsx";
import { ReactNode, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Footer } from "./components/Footer.tsx";
import { allDestinies } from "./components/header/navigationLinks.ts";

export function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById(pathname)?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <DisplayRoute path={allDestinies.map((destiny) => destiny.link)}>
        <Home />
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
      <Footer />
    </>
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
    ? path.includes(pathname) // If path is an array, check if pathname is in the array
    : pathname === path;

  return <Box display={shouldDisplay ? "auto" : "none"}>{children}</Box>;
}
