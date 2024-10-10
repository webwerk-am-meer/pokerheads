import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function NavText({ text, link }: { text: string; link?: string }) {
  const navigate = useNavigate();
  return (
    <Text
      onClick={() => navigate(link ?? "/")}
      _hover={{
        textDecoration: "underline",
      }}
      cursor="pointer"
      fontWeight="600"
      fontSize="24px"
      lineHeight="35px"
    >
      {text}
    </Text>
  );
}
