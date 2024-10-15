import { Header } from "./header/Header.tsx";
import { OurApp } from "./our-app/OurApp.tsx";
import { PokerheadsAcademy } from "./academy/PokerheadsAcademy.tsx";
import { DevicesOverview } from "./DevicesOverview.tsx";
import { Tournaments } from "./tournament/Tournaments.tsx";
import { IngameOverview } from "./IngameOverview.tsx";
import { GlobalRankings } from "./ranking/GlobalRankings.tsx";
import { Stack } from "@chakra-ui/react";

export function HomePage() {
  return (
    <Stack spacing={["60px", "90px", "120px", "150px"]}>
      <Header />
      <OurApp />
      <PokerheadsAcademy />
      <DevicesOverview />
      <Tournaments />
      <IngameOverview />
      <GlobalRankings />
    </Stack>
  );
}
