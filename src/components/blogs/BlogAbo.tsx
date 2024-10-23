import { useDisclosure } from "@chakra-ui/react";
import { BlogAboModal } from "./BlogAboModal";
import { ActionButton } from "../base/ActionButton";
import { BaseCard } from "../base/BaseCard";


export function BlogAbo() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <BaseCard maxH={"200px"} title={"Bleib gut Informiert"} text={"Lass dich über neue Blog-Beiträge von Target KI informieren und bleib auf dem Laufenden."} image={""}>
        <ActionButton
          text={"Abonnieren"}
          w={"320px"}
          h={"50px"}
          animation={false}
          func={onOpen}
          ml="-10px"
        />
      </BaseCard>
      <BlogAboModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}



