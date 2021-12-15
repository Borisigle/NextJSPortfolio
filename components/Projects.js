import React from "react";
import {
  Box,
  HStack,
  Text,
  Stack,
  Image,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
const Proyects = ({ data }) => {
  const bg = useColorModeValue("light", "dark");
  const accentColor = useColorModeValue("accentLight", "accentDark");

  return (
    <>
      <Box id="proyects" pt={24} mb="3rem">
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
              bg={bg}
            >
              <Text fontSize="2xl" fontWeight="bold">
                {name}
              </Text>
              <Text
                fontSize="1xl"
                mb="0.3rem"
                fontWeight="600"
                color={accentColor}
              >
                {stack}
              </Text>
              <Text lineHeight="1.6rem" fontSize="1xl" mt="4" mb="4">
                {description}
              </Text>
              <Link
                fontSize="1xl"
                href={site_url}
                mr="0.7rem"
                color={accentColor}
                fontWeight="600"
                isExternal
              >
                Visit {"->"}
              </Link>
              <Link
                color={accentColor}
                fontSize="1xl"
                href={github_url}
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
