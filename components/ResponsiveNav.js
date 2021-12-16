import React from "react";
import { Box, Text, Flex, VStack, Ico } from "@chakra-ui/react";
import { BiHomeCircle } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import { BiMailSend } from "react-icons/bi";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
const ResponsiveNav = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box
      display={{ base: "block", md: "none" }}
      w="100%"
      bg="#222222"
      borderTop="1px solid #232323"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="999"
      py={4}
    >
      <Flex justify="space-evenly" color="#868686">
        <Flex flexDir="column" alignItems="center">
          <BiHomeCircle size="1.5rem" />
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <BiCodeAlt size="1.5rem" />
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <BiMailSend size="1.5rem" />
        </Flex>
        <Flex
          flexDir="column"
          alignItems="center"
          onClick={toggleColorMode}
          cursor="pointer"
        >
          {useColorModeValue(
            <HiOutlineMoon size="1.5rem" color="#782672" />,
            <HiOutlineSun size="1.5rem" color="orange" />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ResponsiveNav;
