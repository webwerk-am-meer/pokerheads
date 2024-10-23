import { Stack } from "@chakra-ui/react";
import { BlogAbo } from "./BlogAbo";

export function BlogInfoSection() {
  return (
    <>
      <Stack spacing={10}>
        <BlogAbo />
        <BlogCategories />
      </Stack>
    </>
  );
}
