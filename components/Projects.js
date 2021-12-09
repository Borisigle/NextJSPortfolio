import React from "react";
import { Box, HStack, Text, Stack, Image, Flex, Link, useColorModeValue } from "@chakra-ui/react";
const Proyects = ({ data }) => {
  return (
    <>
      <Box id="proyects" py={4} mb="9rem">
        <Text variant="subtitle">Proyectos</Text>
        {data.map((proyect, index) => {
          const { name, stack, description, github_url, site_url, image } =
            proyect;
          return (
            <Box
              key={index}
              mb="3rem"
              borderRadius="3xl"
              padding="2rem"
              bg={useColorModeValue("light", "dark")}
            >
              <Text fontSize="3xl" fontWeight="bold">
                {name}
              </Text>
              <Text mb="0.3rem" fontWeight="600" color="accent">
                {stack}
              </Text>
              <Text
                lineHeight="1.8rem"
                fontSize="1.1rem"
                color={useColorModeValue("gray.700", "gray.400")}
                mt="4"
                mb="4"
              >
                {description}
              </Text>
              <Link
                href={site_url}
                mr="0.7rem"
                color="accent"
                fontWeight="600"
                isExternal
              >
                Visit {"->"}
              </Link>
              <Link
                href={github_url}
                color="accent"
                fontWeight="600"
                isExternal
              >
                View code {"</>"}
              </Link>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Proyects;
