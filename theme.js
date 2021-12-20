import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  accentDark: "#81e6d9",
  accentLight: "#319795",
  dark: "#1a1a1a",
  light: "#ffffff",
  textMutedDark: "#888888",
  textMutedLight: "#444444",
  borderDark: "#222222",
  borderLight: "#bfdbfe",
  inputDark: "#222222",
  inputLight: "#ffffff",
  placeholderDark: "#888888",
  placeholderLight: "#9d9d9d",
  navLight: "#444444",
  navDark: "#868686",
  activeLight: "#222222",
  activeDark: "#eaeaea",
  navHoverLight: "#eaeaea",
  navHoverDark: "#222222",
  borderCardDark: "#252525",
  borderCardLight: "#e8eff2",
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f9fafb", "#111111")(props),
      fontFamily: "inter",
      maxWidth: "700px",
      margin: "0 auto",
      padding: "1rem 1rem",
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const myTheme = extendTheme({ colors, styles, config });

export default myTheme;
