import Head from "next/head";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Proyects from "../components/Proyects";
import projects from "./api/projects";

function Home({ data }) {
  return (
    <Box>
      <Nav />
      <Main />
      <Proyects data={data} />
      {console.log}
    </Box>
  );
}

export async function getStaticProps() {
  const res = await projects()
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
