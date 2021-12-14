import React from "react";
import { Box, HStack, Text, Stack, Image, Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <Box id="home" mb="9rem" mt={32}>
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
            fontWeight="semibold"
            mb="1rem !important"
          >
            Front-end developer React/NextJS
          </Text>
          <Text>
            Hola! mi nombre es Boris, soy desarrollador web, me gusta crear
            sitios y aplicaciones web focalizandome en el diseño y las buenas
            practicas.
          </Text>
        </Stack>
        <Image
          borderRadius="full"
          boxSize={{ base: "100px", md: "150px" }}
          mb={{ base: 4, md: 0 }}
          src="/myPhoto.jpg"
          alt="Boris Iglesias"
        ></Image>
      </Flex>
    </Box>
  );
};

export default Main;
