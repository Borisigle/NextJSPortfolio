import React, { useEffect } from "react";
import { Box, Flex, HStack, Text, Link, Button, useColorModeValue} from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggleButton";

const Nav = () => {
  useEffect(() => {
    const proyects = document.getElementById("proyects");
    const contact = document.getElementById("contact");
    const home = document.getElementById("home");
  }, []);

  return (
      <Box w="100%" borderBottom="1px solid" borderBottomColor={useColorModeValue("#EEEEEE", "#232323")}position="fixed" top="0" left="0" right="0" backdropFilter="blur(10px)">
      <Flex justifyContent="space-between" w="700px" m="auto" p="1rem">
        <HStack>
          <Link onClick={() =>
              home.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }>Home</Link>
          <Link
            onClick={() =>
              proyects.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }
            ml="1rem !important"
          >
            Proyectos
          </Link>
          <Link
            onClick={() =>
              contact.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
              })
            }
            ml="1rem !important"
          >
            Contacto
          </Link>
        </HStack>
        <ThemeToggleButton />
      </Flex>
      </Box>
      
  );
};

export default Nav;
