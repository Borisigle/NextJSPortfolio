import React from "react";
import { Box, HStack, Text, Stack, Image, Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <Box id="home" mb="9rem" mt={32}>
      <Flex justifyContent="space-between" alignItems="center">
        <Stack>
          <Text fontSize="3rem " fontWeight="bold" mb="0px !important">
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
          boxSize="150px"
          src="/myPhoto.jpg"
          alt="Boris Iglesias"
        ></Image>
      </Flex>
    </Box>
  );
};

export default Main;
