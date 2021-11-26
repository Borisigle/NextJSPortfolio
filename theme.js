import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const myTheme = extendTheme({
  styles: {
    global: {
      body: {
        color: "black",
        fontFamily: "inter",
        maxWidth: "700px",
        margin: "0 auto",
        padding: "1rem 1rem",
      },
    },
  },
});

export default myTheme;
