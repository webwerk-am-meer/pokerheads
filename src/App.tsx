import "./assets/css/main.css";
import { useLocation } from "react-router-dom";
import { HomePage } from "./components/HomePage.tsx";
import { useEffect } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { Footer } from "./components/Footer.tsx";
import { allLinks } from "./components/header/navigationLinks.ts";
import { HeaderBar } from "./components/header/HeaderBar.tsx";

export function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById(pathname)?.scrollIntoView({ behavior: "smooth" });
  }, [pathname]);

  return (
    <Stack
      id={allLinks.start.link}
      overflow="clip"
      minHeight="100vh"
      bgGradient="linear(to-b, #253C4A, #0C1F2C)"
      gap={["15px", "5px", "0px"]}
    >
      <HeaderBar />
      <Box flexGrow={1} padding={["10px", "15px", "20px", "25px"]}>
        <HomePage />
      </Box>
      <Footer />
    </Stack>
  );
}

// function DisplayRoute({
//   path,
//   children,
// }: {
//   path: string[] | string;
//   children: ReactNode;
// }) {
//   const { pathname } = useLocation();
//   const shouldDisplay = Array.isArray(path)
//     ? path.includes(pathname)
//     : pathname === path;

//   const component = useMemo(() => children, []);

//   return <Box display={shouldDisplay ? "auto" : "none"}>{component}</Box>;
// }
