import { Stack } from "@chakra-ui/react";
import { BaseBox } from "./BaseBox";
import { BaseText } from "../AGB/Imprint";

export function BaseCard({
  title,
  text,
  image,
  w,
  h,
  children,
  ...rest
}: {
  title: string;
  text: string;
  image: string;
  w?: string;
  h?: string;
  children?: any;
  [key: string]: any;
}) {
  return (
    <BaseBox
      className="bgApp"
      w={w ? w : "377px"}
      h={h}
      aspectRatio={"1/1"}
      px={4}
      py={4}
      backgroundImage={image}
      backgroundPosition={"bottom"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"80% auto"}
      {...rest}
    >
      <Stack>
        <BaseText
          as={"h1"}
          textAlign={"center"}
          text={title}
          fs={"md"}
          bold={true}
        />
        <BaseText as={"h3"} text={text} fs={"xs"} />
        {children}
      </Stack>
    </BaseBox>
  );
}
