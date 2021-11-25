import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter";

const myTheme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
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
