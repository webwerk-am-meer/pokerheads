import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Center,
} from "@chakra-ui/react";
import { BaseBox } from "../base/BaseBox";
import { FormProvider, useForm } from "react-hook-form";
import { BaseInput } from "../base/BaseInput";
import { ActionButton } from "../base/ActionButton";
import { useState } from "react";


export function BlogAboModal({ isOpen, onClose }) {
  const [focusedField, setFocusedField] = useState(null);
  const methods = useForm();
  const onSubmitPhp = useOnSubmitContactField(methods.reset, true, onClose);

  const handleFocus = (index) => {
    setFocusedField(index);
  };

  const fields = [
    {
      placeholder: isMobile ? "Name" : "Gib deinen Namen ein...",
      name: "name",
      title: "Wie heißt du?",
      type: "text",
      required: "Bitte gib deinen Namen ein",
      pattern: null,
    },
    {
      placeholder: isMobile ? "Email" : "Gib deine Email-Adresse ein...",
      name: "email",
      title: "Email-Adresse",
      type: "email",
      required: "Bitte gib deine E-Mail-Adresse ein",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Ungültige E-Mail-Adresse",
      },
    },
  ];

  return (
    <>
      <FormProvider {...methods}>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent bg={"bg"} borderRadius={"25px"}>
            <BaseBox>
              <ModalHeader fontSize={"22px"} color={"white"}>
                Anmeldung zum Newsletter
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Stack spacing={4}>
                  {fields.map((field, i) => {
                    return (
                      <BaseInput
                        color={"white"}
                        key={i}
                        field={field}
                        index={i}
                        focusedField={focusedField}
                        handleFocus={handleFocus}
                      />
                    );
                  })}
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Center w={"100%"}>
                  <ActionButton
                    text={"Anmelden"}
                    mr={3}
                    onSubmit={onSubmitPhp}
                    animation={false}
                    w={"100%"}
                  />
                </Center>
              </ModalFooter>
            </BaseBox>
          </ModalContent>
        </Modal>
      </FormProvider>
    </>
  );
}
