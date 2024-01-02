// Layout.js
import { theme as CG } from "@/themes/CG/theme";
import { theme as Cynergy } from "@/themes/Cynergy";
import { theme as SupplyChain } from "@/themes/SupplyChain";
import { ChakraProvider } from "@chakra-ui/react";
import { usePageNumber } from "~/context/scrollContext";
const themes = [Cynergy, CG, SupplyChain];
const ChakrauiLayout = ({ children }) => {
  const { pageNumber } = usePageNumber();

  const theme = themes[pageNumber] || themes[0]; // Default to the first theme if pageNumber is out of range


  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ChakrauiLayout;
