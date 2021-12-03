import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: {
    body: {
      bg: mode("#f0e7db", "#202023"),
      color: "black",
      fontFamily: "inter",
      maxWidth: "700px",
      margin: "0 auto",
      padding: "1rem 1rem",
    },
  },
};

const components = {
  Text: {
    variants: {
      subtitle: {
        fontSize: "2.5rem",
        fontWeight: "800",
        mb: "3rem",
      },
    },
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const myTheme = extendTheme({ styles, components, config });

export default myTheme;
