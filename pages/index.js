import { Box } from "@chakra-ui/react";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home({ data }) {
  return (
    <Box>
      <Nav />
      <Main />
      <Projects data={data} />
      <Contact />
    </Box>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://borisiglesias.vercel.app/api/projects", {
    headers: {
      Accept: "application/json, text/plain, */*",
      "User-Agent": "*",
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
