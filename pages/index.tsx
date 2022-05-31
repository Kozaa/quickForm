// import { GetServerSideProps } from "next";
// import { connectToDatabase } from "../lib/mongodb";
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Logo from "../components/common/Logo/Logo";
import HowItWorksModal from "../components/heroPage/HowItWorksModal/HowItWorksModal";
import Link from "next/link";

export default function Home() {
  return (
    <Box width={"100vw"} height={'80vh'} py={6} px={10}>
      <VStack height={"full"}>
        <Flex w={"full"} justify={"space-between"}>
          <Logo />
          <HowItWorksModal />
        </Flex>

        <Flex
          height={"full"}
          w={"full"}
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Box maxWidth={"700px"} textAlign={{ base: "center", md: "left" }}>
            <Heading fontSize={["50px", "70px", "100px"]} mb={7}>
              Welcome to QuickForm!
            </Heading>

            <Text
              textColor={"toneDownText"}
              maxWidth={{ base: "100%", md: "60%" }}
            >
              Quickly compose a form that you desire and start gathering data
              with a couple of clicks.
            </Text>
          </Box>

          <Box bg={"green.100"} w={"200px"} h={"200px"} display={{base: 'none', md: 'block'}}>
            yo
          </Box>
        </Flex>

        <Link href={"/create"}>
          <Button variant={"hero"} size={"lg"}>
            Create from
          </Button>
        </Link>
      </VStack>
    </Box>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { db } = await connectToDatabase();
//
//   const data = await db.collection("forms").find().toArray();
//
//   const test = JSON.parse(JSON.stringify(data));
//
//   return {
//     props: { test },
//   };
// };
