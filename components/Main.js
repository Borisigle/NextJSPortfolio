import React from "react";
import {
  Box,
  HStack,
  Text,
  Stack,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

const Main = () => {
  const colorText = useColorModeValue("textMutedLight", "textMutedDark");

  return (
    <Box mt={{ base: 16, md: 32 }}>
      <Flex
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack>
          <Text
            fontWeight="bold"
            mb="0px !important"
            fontSize={{ base: "1.8rem", md: "2.8rem" }}
          >
            Hi there, i&#39;m Boris
          </Text>
          <Text
            fontSize="1rem"
            mt="0px !important"
            fontWeight="regular"
            mb="0.5rem !important"
          >
            Front-end developer{" "}
            <Box as="span" fontWeight="500">
              React/NextJS
            </Box>
          </Text>
          <Text pr={16} color={colorText} fontWeight="400">
            I&#39;m a front-end developer, based in Cordoba, Argentina.
            <br /> I ♡ music, drawing, playing guitar and video games.
          </Text>
        </Stack>
        <Image
          borderRadius="full"
          boxSize={{ base: "5.6rem", md: "125px" }}
          mb={{ base: 4, md: 0 }}
          src="/myPhoto.jpg"
          alt="Boris Iglesias"
        ></Image>
      </Flex>
    </Box>
  );
};

export default Main;
