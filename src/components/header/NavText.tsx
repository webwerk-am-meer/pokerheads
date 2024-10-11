import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useResponsiveValue } from "../../hooks/breakpoint.tsx";

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
  const fontSize = useResponsiveValue({ base: "20px", md: "22px", lg: "24px" });
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
      fontSize={fontSize}
      lineHeight="35px"
    >
      {text}
    </Text>
  );
}
