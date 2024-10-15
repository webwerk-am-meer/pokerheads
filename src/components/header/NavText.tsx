import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function NavText({
  text,
  link,
  onSelect,
}: {
  text: string;
  link?: string;
  onSelect?: () => void;
}) {
  const navigate = useNavigate();

  function onClick() {
    onSelect?.();
    if (link === undefined) return;
    navigate(link);
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
      fontSize={["20px", "20px", "22px", "24px"]}
      lineHeight="35px"
    >
      {text}
    </Text>
  );
}
