import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function NavText({ text }: { text: string }) {
  const navigate = useNavigate();
  return (
    <Text
      onClick={() => navigate("asd")}
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
