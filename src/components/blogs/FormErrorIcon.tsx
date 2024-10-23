import { Box, Center, Tooltip } from "@chakra-ui/react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { TiWarning } from "react-icons/ti";

export function FormErrorIcon({ message }: {message: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined}) {
  return (
    <Tooltip
      label={message}
      borderColor={"rgb(0 0 0 / 0.1)"}
      bgColor="bg"
      borderWidth={"1px"}
      borderRadius={"0.5rem"}
      fontWeight={"semibold"}
      color="white"
    >
      <Box
        w={"20px"}
        h={"20px"}
        borderRadius={"100%"}
        bgColor={"rgb(239 35 60 / 0.8)"}
      >
        <Center h={"100%"}>
          <TiWarning color="white" fontSize={12} />
        </Center>
      </Box>
    </Tooltip>
  );
}
