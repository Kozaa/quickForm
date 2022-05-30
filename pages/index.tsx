// import { GetServerSideProps } from "next";
// import { connectToDatabase } from "../lib/mongodb";
import {Container, Heading, VStack} from "@chakra-ui/react";

export default function Home() {

  return (
      <Container>
        <VStack>
          <Heading>Welcome to QucikForm! Create simple forms with ease.</Heading>
        </VStack>
      </Container>
  )
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
