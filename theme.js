import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";

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
