import { GetServerSideProps } from "next";
import { connectToDatabase } from "../lib/mongodb";
export default function Home({ test }) {
  console.log(test);
  return <div> hey</div>;
}

export async function getServerSideProps(): GetServerSideProps {
  const { db } = await connectToDatabase();

  const data = await db.collection("forms").find().toArray();
  console.log("omg", data);

  const test = JSON.parse(JSON.stringify(data));
  // console.log("?", data);

  return {
    props: { test },
    // props: { test: 'test' },
  };
}
