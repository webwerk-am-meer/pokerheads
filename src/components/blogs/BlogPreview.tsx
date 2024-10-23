import {
  Center,
  Stack,
  VStack,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BaseImageCard } from "../base/BaseImageCard";
import { BaseText } from "../AGB/Imprint";
import { useState } from "react";
import { blogs } from "./blogs";

export function BlogPreviews() {
  const navigate = useNavigate();
  const [filteredBlogs, ] = useState(blogs);

  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const isMobile = variant === "base" || variant === "sm" || variant === "md";
  const align = isMobile ? "center" : "left";

  return (
    <VStack spacing={10}>
      {filteredBlogs.map((blog, i) => {
        return (
          <Wrap w={"100%"} spacing={5} key={i}>
            {isMobile ? (
              <WrapItem w={"100%"}>
                <Center w={"100%"}>
                  <BaseImageCard
                    image={blog.image ?? "https://via.placeholder.com/150"}
                    h={"222px"}
                    cursor={"pointer"}
                    onClick={() => {
                      navigate(`/blogs/${blog.id}`);
                      window.scrollTo(0, 0);
                    }}
                  />
                </Center>
              </WrapItem>
            ) : (
              <WrapItem>
                <BaseImageCard
                  image={blog.image ?? "https://via.placeholder.com/150"}
                  backgroundSize={"cover"}
                  h={"222px"}
                  cursor={"pointer"}
                  onClick={() => {
                    navigate(`/blogs/${blog.id}`);
                    window.scrollTo(0, 0);
                  }}
                />
              </WrapItem>
            )}

            <WrapItem w={isMobile ? "100%" : "50%"} py={2}>
              <Stack>
                <BaseText
                  color={"lightgrey"}
                  fs={"18px"}
                  textAlign={align}
                  text={blog.date}
                />
                <BaseText
                  bold={true}
                  fs={"24px"}
                  textAlign={align}
                  text={blog.title}
                  _hover={{ color: "grey", cursor: "pointer" }}
                  onClick={() => {
                    navigate(`/blogs/${blog.id}`);
                    window.scrollTo(0, 0);
                  }}
                />
                <BaseText
                  color={"lightgrey"}
                  fs={"16px"}
                  textAlign={align}
                  text={blog.text}
                  cursor={"pointer"}
                  onClick={() => {
                    navigate(`/blogs/${blog.id}`);
                    window.scrollTo(0, 0);
                  }}
                />
              </Stack>
            </WrapItem>
          </Wrap>
        );
      })}
    </VStack>
  );
}
