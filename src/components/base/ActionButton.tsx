import { Box, Button, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdKeyboardArrowRight } from "react-icons/md";

export function ActionButton(props: any) {
  const {
    href,
    ml,
    w,
    text,
    onClick = () => {},
    onSubmit,
    func,
    type,
    fs,
    animation = true,
    ...rest
  } = props;

  const variant = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const isMobile = variant === "base" || variant === "sm" || variant === "md";
  const { handleSubmit } = useFormContext() || {};

  const [show, setShow] = useState(false);

  return (
    <Box
      p={"15px"}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      borderRadius={"50vh"}
    >
      <Button
        onClick={() => {
          onSubmit ? handleSubmit(onSubmit)() : null;
        }}
        ml={ml}
        h={isMobile ? "50px" : "61px"}
        fontSize={fs ?? "md"}
        w={w ? w : "449px"}
        textAlign={"center"}
        borderRadius={"10px"}
        borderWidth={0}
        color={"white"}
        bg={"black"}
        fontFamily={"Montserrat"}
        fontWeight={"semibold"}
        _hover={{ bgColor: "white" }}
        letterSpacing={2}
        className={animation ? "parent MontserratBold" : "MontserratBold"}
        type={type}
        {...rest}
      >
        {text ?? "Termin Vereinbaren"}
        {show && animation && (
          <MdKeyboardArrowRight
            className={animation ? "child" : ""}
            size={32}
          />
        )}
      </Button>
    </Box>
  );
}
