import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Text, Box, Stack, Input } from "@chakra-ui/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xvolpybj");
  if (state.succeeded) {
    return <p>Muchas gracias por contactarte!</p>;
  }
  return (
    <Box id="contact">
      <Text fontSize="2.5rem" fontWeight="bold">
        Contactame
      </Text>
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
            />
            <Input
              type="text"
              name="name"
              id="full-name"
              required=""
              variant="flushed"
              placeholder="First and last name"
              _placeholder={{ color: "#646c78" }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
