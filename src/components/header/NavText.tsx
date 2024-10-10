import { Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export function NavText({ text, link }: { text: string; link: string }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function onClick() {
    if (pathname !== link) {
      navigate(link);
    }
    document.getElementById(link)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Text
      onClick={onClick}
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
