import { Heading, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FormDataContext } from "../../../pages/create";

export function CreateMainEditor() {
  const { formData } = useContext(FormDataContext);

  return (
    <VStack as="main" alignItems="center" w="100%" px="30" py="10">
      <Heading>{formData.formTitle}</Heading>


    </VStack>
  );
}
