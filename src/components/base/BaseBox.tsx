import { Box } from "@chakra-ui/react";

export function BaseBox({
  w,
  h,
  children,
  ...rest
}: {
  w?: string;
  h?: string;
  children?: any;
  [key: string]: any;
}) {
  return (
    <Box
      className="bgGradient"
      w={w}
      h={h}
      p={"2px"}
      border={"3px solid #525252"}
      position={"relative"}
      borderRadius={"25px"}
    >
      <Box
        className="bgGradient"
        px={10}
        py={4}
        border={"3px solid #2c2c2c"}
        w={"100%"}
        h={"100%"}
        borderRadius={"20px"}
        {...rest}
      >
        {children}
      </Box>
    </Box>
  );
}
