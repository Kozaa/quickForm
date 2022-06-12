import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Logo from "../../common/Logo/Logo";
import { CreateFormSegment } from "../CreateFormSegment/CreateFormSegment";

const data = [
  {
    title: "Text",
    subtitle: "Simple text with to inform the person taking the survey.",
  },
  {
    title: "Short question",
    subtitle:
      "A question that can be answered fairly shortly, up to 200 characters.",
  },
  {
    title: "Long question",
    subtitle:
      "Same as short question, but the answer can be up to 1000 characters.",
  },
  {
    title: "Multiple choice question",
    subtitle:
      "A question with up to 4 predefined answers, but only one answer can be selected.",
  },
  {
    title: "Multiple answer question",
    subtitle:
      "A question with up to 4 predefined answers, where many can be selected at once.",
  },
];

export function CreateSidePanel() {
  return (
    <VStack w="350px" h="100vh" overflowY="auto" bgColor="brand">
      <Flex
        bgColor="toneDown"
        w="100%"
        h="50px"
        minH="50px"
        alignItems="center"
        paddingLeft="30px"
      >
        <Logo />
      </Flex>

      <Box w="full" paddingLeft="5">
        <Heading fontSize="25">Available segments</Heading>
        <Text fontSize="14" textColor="toneDown">
          Click on segment to add it to the stack
        </Text>
      </Box>

      {data.map((segment) => (
        <CreateFormSegment segment={segment} key={segment.title} />
      ))}
    </VStack>
  );
}
