import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "../theme";
import { ColorModeScript } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={myTheme}>
      {" "}
      <ColorModeScript initialColorMode={myTheme.config.initialColorMode} />
      <Component {...pageProps} />{" "}
    </ChakraProvider>
  );
}

export default MyApp;
