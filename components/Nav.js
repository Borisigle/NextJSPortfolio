import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box mt="1.5rem" mb="5rem">
      <Flex justifyContent="space-between">
        <HStack>
          <Text>Home</Text>
          <Text ml="1rem !important">Proyects</Text>
          <Text ml="1rem !important">Contact</Text>
        </HStack>
        <Text>A</Text>
      </Flex>
    </Box>
  );
};

export default Nav;
