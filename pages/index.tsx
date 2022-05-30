// import { GetServerSideProps } from "next";
// import { connectToDatabase } from "../lib/mongodb";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <VStack>
        <Heading size={"4xl"}>Welcome to QuickForm!</Heading>
        <Text>
          Quickly compose a form that you desire and start gathering data with a
          couple of clicks.
        </Text>
      </VStack>
    </Container>
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
