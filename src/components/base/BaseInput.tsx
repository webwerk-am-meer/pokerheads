import { HStack, Input, Stack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { BaseText } from "../AGB/Imprint";
import { FormErrorIcon } from "../blogs/FormErrorIcon";

export function BaseInput({
  field,
  index,
  focusedField,
  handleFocus,
  ...rest
}: {
  field: any;
  index: number;
  focusedField: number;
  handleFocus: any;
  [key: string]: any;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Stack spacing={"5px"}>
      <HStack>
        <BaseText text={field?.title} fs={"sm"} color={"white"} bold={true} />
        {errors[field?.name] && (
          <FormErrorIcon message={errors[field?.name]?.message} />
        )}
      </HStack>
      <Input
        onFocus={() => handleFocus(index)}
        borderRadius={"10px"}
        border={"none"}
        w={"100%"}
        h={"45px"}
        bg={focusedField === index ? "#3d3d3d" : "#3d3d3d"}
        _placeholder={{ fontSize: "16px" }}
        placeholder={field?.placeholder}
        {...register(field.name, {
          required: field.required,
          pattern: field.pattern,
        })}
        {...rest}
      />
    </Stack>
  );
}
