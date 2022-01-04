import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Text,
  Box,
  Stack,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xvolpybj");

  const bg = useColorModeValue("light", "dark");
  const accentColor = useColorModeValue("accentLight", "accentDark");
  const contactFormColor = useColorModeValue("#eff6ff", "#101529");
  const buttonColor = useColorModeValue("accentLight", "accentDark");
  const borderColor = useColorModeValue("borderLight", "borderDark");
  const inputColor = useColorModeValue("inputLight", "inputDark");
  const placeholderColor = useColorModeValue(
    "placeholderLight",
    "placeholderDark"
  );

  return (
    <Box id="contact">
      <Text
        fontSize={{ base: "1.5rem", md: "2rem" }}
        fontWeight="800"
        pt={{ base: 16, md: "none" }}
        mb="2rem"
      >
        Let&#39;s talk
      </Text>
      <Box
        bg={contactFormColor}
        border="1px solid"
        borderColor={borderColor}
        mb="3rem"
        borderRadius="xl"
        padding="2rem"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <Input
              bg={inputColor}
              id="email"
              type="email"
              name="email"
              variant="outline"
              focusBorderColor="accent"
              placeholder="Email adress"
              _placeholder={{ color: placeholderColor }}
              mb="2rem"
              mt="1rem !important"
              required
              disabled={state.succeeded}
              autoComplete="off"
            />
            <Input
              bg={inputColor}
              type="text"
              name="name"
              id="full-name"
              variant="outline"
              focusBorderColor="accent"
              placeholder="First and last name"
              _placeholder={{ color: placeholderColor }}
              mb="2rem !important"
              required
              disabled={state.succeeded}
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Textarea
              bg={inputColor}
              placeholder="Message"
              _placeholder={{ color: placeholderColor }}
              focusBorderColor="accent"
              id="message"
              name="message"
              variant="outline"
              required
              disabled={state.succeeded}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Stack>
          <Button
            isLoading={state.submitting}
            loadingText="Submitting..."
            bg={buttonColor}
            color="white"
            size="md"
            type="submit"
            mt="3rem !important"
            pointerEvents={state.succeeded ? "none" : "auto"}
          >
            {state.succeeded ? "Sent" : "Send"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
