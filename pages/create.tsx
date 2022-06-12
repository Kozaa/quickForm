import { Flex } from "@chakra-ui/react";
import { CreateSidePanel } from "../components/createPage/CreateSidePanel/CreateSidePanel";
import { CreateMainEditor } from "../components/createPage/CreateMainEditor/CreateMainEditor";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { FormData } from "../types/types";

const defaultFormData: FormData = {
  formTitle: "Form title, press on the text to edit",
  segmentInstances: [
    {
      text: " This is an example of a text segment, you can also press on the text to edit the content of this segment",
    },
  ],
};

export const FormDataContext = createContext<{
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
} | null>(null);

export default function Create() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  return (
    <Flex w={"full"}>
      <FormDataContext.Provider value={{ formData, setFormData }}>
        <CreateSidePanel />
        <CreateMainEditor />
      </FormDataContext.Provider>
    </Flex>
  );
}
