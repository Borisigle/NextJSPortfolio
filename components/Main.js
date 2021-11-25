import React from "react";
import { Box, HStack, Text, Stack, Image, Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <Box>
      <Flex justifyContent='space-between'> 
        <Stack>
          <Text>Boris Iglesias</Text>
          <Text>
            Helping developers build a faster web. Teaching about web
            development, serverless, and React / Next.js.
          </Text>
        </Stack>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        ></Image>
      </Flex>
    </Box>
  );
};

export default Main;
