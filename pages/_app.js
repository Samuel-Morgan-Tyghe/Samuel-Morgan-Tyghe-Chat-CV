import { ChakraProvider } from "@chakra-ui/react";
import MetaData from "@components/MetaData";
import "@styles/globals.css";

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MetaData />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
