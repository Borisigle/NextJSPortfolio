import React from "react";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Box>
      <Flex justifyContent="space-between">
        <HStack>
          <Text>Home</Text>
          <Text>Proyects</Text>
          <Text>Contact</Text>
        </HStack>
        <Text>A</Text>
      </Flex>
    </Box>
  );
};

export default Nav;
