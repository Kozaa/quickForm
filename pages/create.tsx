import { Flex } from "@chakra-ui/react";
import { CreateSidePanel } from "../components/createPage/CreateSidePanel/CreateSidePanel";

export default function Create() {
  return (
    <Flex w={"full"}>
      <CreateSidePanel />
    </Flex>
  );
}
