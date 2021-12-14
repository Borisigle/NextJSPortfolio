import React from "react";
import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import { BiHomeCircle } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";

const ResponsiveNav = () => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      w="100%"
      bg="gray.100"
      borderTop="2px solid #eaeaea"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="999"
      py={4}
    >
      <Flex justify="space-evenly" color="accent">
        <Flex flexDir="column" alignItems="center">
          <BiHomeCircle size="1.5rem" />
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <BiCodeAlt size="1.5rem" />
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <BiMailSend size="1.5rem" />
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <HiOutlineSun size="1.5rem" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ResponsiveNav;
