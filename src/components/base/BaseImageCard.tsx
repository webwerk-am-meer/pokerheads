import { BaseText } from "../AGB/Imprint";
import { BaseBox } from "./BaseBox";

export function BaseImageCard({
  w,
  h,
  text,
  image,
  ...rest
}: {
  w?: string;
  h?: string;
  text?: string;
  image?: string;
  [key: string]: any;
}) {
  return (
    <BaseBox
      className="bgGradient"
      aspectRatio={"279/194"}
      position={"relative"}
      backgroundImage={image}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"bottom"}
      backgroundSize={"contain"}
      w={w}
      h={h}
      {...rest}
    >
      <BaseText
        position={"absolute"}
        left={0}
        bottom={"20%"}
        w={"100%"}
        text={text}
        textAlign={"center"}
        fs={["sm", "md", "sm", "lg"]}
        bold={true}
      />
    </BaseBox>
  );
}
