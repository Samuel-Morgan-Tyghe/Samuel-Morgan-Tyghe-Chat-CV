import { Box, BoxProps, Center, Flex } from "@chakra-ui/react";
import {
  PAGE_THEME,
  THEME_NAMES,
  getThemeFromPageNumber,
} from "@components/portfolio/PageThemes";
import Screen from "@components/portfolio/ScrollingScreen/Screen";
import Example from "@components/portfolio/Texture";
import { ReactNode } from "react";
import Layout from "src/components/Layout";
import { usePrimaryBreakpoint } from "~/hooks/useCustomBreakpoint";

const Section = ({
  children,
  ...props
}: { children?: ReactNode } & BoxProps) => (
  <Center
    w="100vw"
    h="100vh"
    boxShadow={"dark-lg"}
    {...props}
    sx={{
      "svg, rect, g": { width: "100vw", height: "100vh" },
      svg: { mixBlendMode: "multiply", px: "0" },
    }}
    p="0 !important"
  >
    {children}
    <Example width={100} height={100} />
  </Center>
);

export const pageComponents = [
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
  [Section, Section, Section],
] as const;

const randomColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
];

function Portfolio() {
  const { x } = usePrimaryBreakpoint();
  console.log("🚀 ~ file: portfolio.tsx:54 ~ Portfolio ~ x:", x);
  return (
    <Layout>
      <Box sx={{ "&>*": { px: x } }}>
        <Flex
          w="100vw"
          h="100vh"
          justifyContent="flex-end"
          alignItems="center"
          position="fixed"
          top="0"
          zIndex={1}
        >
          <Screen />
        </Flex>
        {pageComponents.map((sections, pageIndex) =>
          sections.map((Sect, index) => (
            <Sect
              key={`${pageIndex}-${index}`}
              background={getThemeFromPageNumber(pageIndex).background}
              position={"relative"}
              px="0"
            />
          ))
        )}
      </Box>
    </Layout>
  );
}

export default Portfolio;
