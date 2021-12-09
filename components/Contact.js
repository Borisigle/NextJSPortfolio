import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Text, Box, Stack, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xvolpybj");
  if (state.succeeded) {
    return <p>Muchas gracias por contactarte!</p>;
  }
  return (
    <Box id="contact">
      <Text variant="subtitle">Hablemos</Text>
      <Box bg={useColorModeValue("#f3f4f6", "#1a1a1a")} mb="3rem" borderRadius="3xl" padding="2rem">
        <form onSubmit={handleSubmit}>
          <Stack>
            <Input
              id="email"
              type="email"
              name="email"
              variant="flushed"
              focusBorderColor="accent"
              placeholder="Email adress"
              _placeholder={{ color: useColorModeValue("gray.700", "gray.300")}}
              mb="2rem"
              mt="1rem !important"
              required
            />
            <Input
              type="text"
              name="name"
              id="full-name"
              variant="flushed"
              focusBorderColor="accent"
              placeholder="First and last name"
              _placeholder={{ color: useColorModeValue("gray.700", "gray.300")}}
              mb="2rem !important"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Textarea
              placeholder="Message"
              focusBorderColor="accent"
              id="message"
              name="message"
              variant="flushed"
              _placeholder={{ color: useColorModeValue("gray.700", "gray.300")}}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button bg="accent" color="white" size="md" type="submit" disabled={state.submitting} mt="2rem !important">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
