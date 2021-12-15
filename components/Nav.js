import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import ThemeToggleButton from "./ThemeToggleButton";
import ResponsiveNav from "./ResponsiveNav";

const Nav = () => {
  const [active, setActive] = useState();
  const navColor = useColorModeValue("navLight", "navDark");
  const navActiveColor = useColorModeValue("activeLight", "activeDark");
  const navHoverColor = useColorModeValue("navHoverLight", "navHoverDark");

  useEffect(() => {
    setActive(window.location.hash.substr(0));
  }, []);

  const NavLink = ({ href, text }) => {
    const isActive = active === href;

    return (
      <Link
        borderRadius="md"
        px={2}
        py={1}
        onClick={() => setActive(href)}
        href={href}
        _hover={{ bg: navHoverColor }}
      >
        <Text
          fontWeight={isActive && "semibold"}
          color={isActive ? navActiveColor : navColor}
        >
          {text}
        </Text>
      </Link>
    );
  };

  return (
    <>
      <Box
        w="100%"
        borderBottom="1px solid"
        borderBottomColor={useColorModeValue("#EEEEEE", "#232323")}
        position="fixed"
        top="0"
        left="0"
        right="0"
        backdropFilter="blur(10px)"
        display={{ base: "none", md: "block" }}
      >
        <Flex justifyContent="space-between" w="700px" m="auto" p="1rem">
          <HStack spacing={4}>
            <NavLink href="#home" text="Home" />
            <NavLink href="#proyects" text="Proyects" />
            <NavLink href="#contact" text="Contact" />
          </HStack>
          <ThemeToggleButton />
        </Flex>
      </Box>

      <ResponsiveNav />
    </>
  );
};

export default Nav;
