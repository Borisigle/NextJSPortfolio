import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Text, Box, Stack, Input, Textarea, Button } from "@chakra-ui/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xvolpybj");
  if (state.succeeded) {
    return <p>Muchas gracias por contactarte!</p>;
  }
  return (
    <Box id="contact">
      <Text variant="subtitle">Contactame</Text>
      <Box bg="#f3f4f6" mb="3rem" borderRadius="3xl" padding="2rem">
        <form onSubmit={handleSubmit}>
          <Stack>
            <Input
              id="email"
              type="email"
              name="email"
              variant="flushed"
              placeholder="Email adress"
              _placeholder={{ color: "#646c78" }}
              mb="2rem"
              mt="1rem !important"
            />
            <Input
              type="text"
              name="name"
              id="full-name"
              required=""
              variant="flushed"
              placeholder="First and last name"
              _placeholder={{ color: "#646c78" }}
              mb="2rem !important"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Textarea
              placeholder="Message"
              id="message"
              name="message"
              variant="flushed"
              _placeholder={{ color: "#646c78" }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button size="md" type="submit" disabled={state.submitting}>
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
