import { Text, VStack } from "@chakra-ui/react";
import { Segment } from "../../../types/types";

interface Props {
  segment: Segment;
}

export function CreateFormSegment({ segment: { title, subtitle } }: Props) {
  return (
    <VStack
      w="90%"
      bgGradient="linear(to-r, brand, primary)"
      borderRadius="10px"
      padding="5px"
      alignItems="start"
      transition="transform .2s"
      _hover={{ cursor: "pointer", transform: "scale(1.05)" }}
    >
      <Text fontWeight="bold">{title}</Text>
      <Text paddingLeft="15px">{subtitle}</Text>
    </VStack>
  );
}
