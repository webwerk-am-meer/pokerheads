import {
  Center,
  HStack,
  Image,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import wapp from "../../assets/images/whatsapp.svg";
import facebook from "../../assets/images/facebook.svg";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import { BaseBox } from "../base/BaseBox";
import { BaseText } from "../AGB/Imprint";
import { useParams } from "react-router-dom";
import { blogs } from "./blogs";
import { HeaderText } from "./HeaderText";
import { HeaderBar } from "../header/HeaderBar";
import { Footer } from "../Footer";

const BlogInfoCard = ({ id }: { id: string | number }) => {
  const shareUrls = {
    whatsapp: `https://api.whatsapp.com/send?text=Schau%20dir%20diesen%20interessanten%20Blogbeitrag%20an!%20https://target-ki.de/blogs/${id}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=https://target-ki.de/blogs/${id}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=https://target-ki.de/blogs/${id}`,
    twitter: `https://twitter.com/intent/tweet?url=https://target-ki.de/blogs/${id}`,
  };

  const handleShareClick = (
    platform: "whatsapp" | "facebook" | "linkedin" | "twitter"
  ) => {
    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  return (
    <Stack>
      <BaseBox w={"389px"} h={"232px"} px={10}>
        <BaseText
          bold={true}
          textAlign={"center"}
          fs={"32px"}
          color={"white"}
          text={"Teile den Beitrag"}
        />
        <Center>
          <HStack spacing={4} pt={10}>
            <Image
              w={"40px"}
              alt="Whatsapp Teilen"
              title="Auf Whatsapp Teilen"
              src={wapp}
              onClick={() => handleShareClick("whatsapp")}
              cursor={"pointer"}
            />
            <Image
              w={"40px"}
              alt="Facebook Teilen"
              title="Auf Facebook Teilen"
              src={facebook}
              onClick={() => handleShareClick("facebook")}
              cursor={"pointer"}
            />
            <Image
              w={"40px"}
              alt="Linkdin Teilen"
              title="Auf Linkdin Teilen"
              src={linkedin}
              onClick={() => handleShareClick("linkedin")}
              cursor={"pointer"}
            />
            <Image
              w={"40px"}
              alt="Twitter Teilen"
              title="Auf Twitter Teilen"
              src={twitter}
              onClick={() => handleShareClick("twitter")}
              cursor={"pointer"}
            />
          </HStack>
        </Center>
      </BaseBox>
    </Stack>
  );
};

export function BlogDetail() {
  const { id } = useParams();

  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const isMobile = variant === "base" || variant === "sm" || variant === "md";

  const blog = blogs.find((blog) => blog.id === id?.toString());

  if (blog === undefined)
    return (
      <p style={{ marginTop: "100px", color: "red" }}>Kein Blog gefunden</p>
    );

  return (
    <Stack
      h={"100%"}
      color={"white"}
      bgGradient="linear(to-b, #253C4A, #0C1F2C)"
      className="Montserrat bgApp"
      position="relative"
      minHeight="100vh"
    >
      <HeaderBar />
      <HeaderText
        title={blog.title}
        titleFs={["16px", "18px", "22px", "24px"]}
        subtitle={blog.subtitle}
        subtitleFs={["18px", "22px", "26px", "28px"]}
        header={true}
        mt={"10px"}
      />
      <HStack w={"100%"} alignItems={"flex-start"} px={2} spacing={5}>
        {!isMobile && <BlogInfoCard id={id ?? ""} />}
        {blog.fullText}
      </HStack>
      <Footer />
    </Stack>
  );
}
