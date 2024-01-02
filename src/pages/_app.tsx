import { ChakraProvider } from "@chakra-ui/react";
import MetaData from "@components/MetaData";
import "../styles/globals.css";
import { PageNumberProvider } from "~/context/scrollContext";
import ChakrauiLayout from "~/containers/chakrauiLayout";

function Application({ Component, pageProps }) {
  return (
    <PageNumberProvider>
      <ChakrauiLayout>
        <MetaData />
        <Component {...pageProps} />
      </ChakrauiLayout>
    </PageNumberProvider>
  );
}

export default Application;
