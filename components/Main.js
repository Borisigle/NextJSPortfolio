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
    <Box mt={32}>
      <Flex
        justifyContent="space-between"
        alignItems={{ base: "flex-start", md: "center" }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack>
          <Text
            fontWeight="bold"
            mb="0px !important"
            fontSize={{ base: "4xl", md: "5xl" }}
          >
            Boris Iglesias
          </Text>
          <Text
            fontSize="1rem"
            mt="0 !important"
            fontWeight="regular"
            mb="1rem !important"
          >
            Front-end developer{" "}
            <Box as="span" fontWeight="500">
              React/NextJS
            </Box>
          </Text>
          <Text pr={16} color={colorText}>
            Soy desarrollador web, me gusta crear sitios y aplicaciones web
            focalizandome en el diseño y las buenas practicas.
          </Text>
        </Stack>
        <Image
          borderRadius="full"
          boxSize={{ base: "100px", md: "125px" }}
          mb={{ base: 4, md: 0 }}
          src="/myPhoto.jpg"
          alt="Boris Iglesias"
        ></Image>
      </Flex>
    </Box>
  );
};

export default Main;
