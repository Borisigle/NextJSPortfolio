import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  accent: "#ff63c3",
  dark: "#1a1a1a",
  light: "#ffffff",
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f3f4f6", "#111111")(props),
      fontFamily: "inter",
      maxWidth: "700px",
      margin: "0 auto",
      padding: "1rem 1rem",
    },
  }),
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

const myTheme = extendTheme({ colors, styles, components, config });

export default myTheme;
