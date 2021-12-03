import React from "react";
import { Box, HStack, Text, Stack, Image, Flex, Link } from "@chakra-ui/react";
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
              bg="#f3f4f6"
              mb="3rem"
              borderRadius="3xl"
              padding="2rem"
            >
              <Text fontSize="3xl" fontWeight="bold">
                {name}
              </Text>
              <Text mb="0.3rem" fontWeight="600" color="#670cc2">
                {stack}
              </Text>
              <Text
                lineHeight="1.8rem"
                fontSize="1.1rem"
                color="#646c78"
                mt="4"
                mb="4"
              >
                {description}
              </Text>
              <Link
                href={site_url}
                mr="0.7rem"
                color="#670cc2"
                fontWeight="600"
                isExternal
              >
                Visit {"->"}
              </Link>
              <Link
                href={github_url}
                color="#670cc2"
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
