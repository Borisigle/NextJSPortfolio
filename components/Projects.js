import React from "react";
import { Box, Text, Link, useColorModeValue } from "@chakra-ui/react";
const Proyects = ({ data }) => {
  const bg = useColorModeValue("light", "dark");
  const accentColor = useColorModeValue("accentLight", "accentDark");
  const borderColorCard = useColorModeValue(
    "borderCardLight",
    "borderCardDark"
  );
  const colorText = useColorModeValue("textMutedLight", "textMutedDark");

  return (
    <>
      <Box id="proyects" pt={{ base: 16, md: 24 }} mb="3rem">
        <Text
          fontSize={{ base: "1.5rem", md: "2rem" }}
          fontWeight="800"
          mb="2rem"
        >
          Proyects
        </Text>
        {data.map((proyect, index) => {
          const { name, stack, description, github_url, site_url, image } =
            proyect;
          return (
            <Box
              key={index}
              mb="2.2rem"
              borderRadius="2xl"
              padding="2rem"
              bg={bg}
              border="1px solid"
              borderColor={borderColorCard}
            >
              <Text
                fontSize={{ base: "1.3rem", md: "1.5rem" }}
                fontWeight="bold"
              >
                {name}
              </Text>
              <Text
                fontSize="1rem"
                mb="0.3rem"
                fontWeight="600"
                color={accentColor}
              >
                {stack}
              </Text>
              <Text
                lineHeight="1.6rem"
                fontSize="1xl"
                mt="4"
                mb="4"
                color={colorText}
              >
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
