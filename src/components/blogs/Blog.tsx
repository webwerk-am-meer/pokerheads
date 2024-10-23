import {
  Box,
  HStack,
  Spacer,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HeaderText } from "./HeaderText";
import { BlogPreviews } from "./BlogPreview";
import { HeaderBar } from "../header/HeaderBar";
import { Footer } from "../Footer";

export function Blogs() {
  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const isMobile = variant === "base" || variant === "sm" || variant === "md";

  return (
    <Stack
      h={"100vh"}
      color={"white"}
      bgGradient="linear(to-b, #253C4A, #0C1F2C)"
      className="Montserrat bgApp"
    >
      <HeaderBar />
      <HeaderText
        title={"stets gut Informiert"}
        titleFs={isMobile ? "20px" : "35px"}
        subtitle={"Aktuelle Poker News"}
        subtitleFs={isMobile ? "30" : "48px"}
        header={true}
        mt={isMobile ? "20px" : "0px"}
      />
      <HStack w={"100%"} px={1} alignItems={"flex-start"}>
        {isMobile ? (
          <BlogPreviews />
        ) : (
          <>
            <Box w={"85%"}>
              <BlogPreviews />
            </Box>
            <Spacer />
            {/* <Box w={"40%"}>
                <BlogInfoSection />
              </Box> */}
          </>
        )}
      </HStack>
      <Footer />
    </Stack>
  );
}
