import { Stack } from "@chakra-ui/react";
import { Header } from "./components/header/Header.tsx";
import { OurApp } from "./components/our-app/OurApp.tsx";
import { PokerheadsAcademy } from "./components/academy/PokerheadsAcademy.tsx";
import { DevicesOverview } from "./components/DevicesOverview.tsx";
import { Tournaments } from "./components/tournament/Tournaments.tsx";
import { IngameOverview } from "./components/IngameOverview.tsx";
import { Footer } from "./components/Footer.tsx";
import { GlobalRankings } from "./components/ranking/GlobalRankings.tsx";

export function App() {
  return (
    <Stack spacing="150px">
      <Header />
      <OurApp />
      <PokerheadsAcademy />
      <DevicesOverview />
      <Tournaments />
      <IngameOverview />
      <GlobalRankings />
      <Footer />
    </Stack>
  );
}
