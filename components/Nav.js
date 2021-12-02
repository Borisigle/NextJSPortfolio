import React, { useEffect } from "react";
import { Box, Flex, HStack, Text, Link } from "@chakra-ui/react";

const Nav = () => {
  useEffect(() => {
    const proyects = document.getElementById("proyects");
    const contact = document.getElementById("contact");
  }, []);

  return (
    <Box mt="1.5rem" mb="5rem">
      <Flex justifyContent="space-between">
        <HStack>
          <Text>Home</Text>
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
        <Text>A</Text>
      </Flex>
    </Box>
  );
};

export default Nav;
