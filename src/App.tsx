import { Box, Stack } from "@chakra-ui/react";
import { Header } from "./components/header/Header.tsx";
import { navigationLinks } from "./constants/navigationLink.tsx";

export function App() {
  return (
    <Stack spacing="150px">
      <Header />
      {navigationLinks.map(({ link, content }, index) => (
        <Box key={index} id={link}>
          {content}
        </Box>
      ))}
    </Stack>
  );
}
