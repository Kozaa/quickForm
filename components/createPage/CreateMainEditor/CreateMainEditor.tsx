import { Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { FormDataContext } from "../../../pages/create";

export function CreateMainEditor() {
  const { formData } = useContext(FormDataContext);

  return (
    <VStack as="main">
      <Text>{formData.formTitle}</Text>
    </VStack>
  );
}
