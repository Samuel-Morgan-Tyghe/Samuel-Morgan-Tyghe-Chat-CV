import { Box, BoxProps, Center, Flex } from "@chakra-ui/react";
import useAnimatedTheme, {
  ColorTheme,
  PAGE_THEME,
  THEME_NAMES,
  getThemeFromPageNumber,
} from "@components/portfolio/PageThemes";
import { ProjectText } from "@components/portfolio/ProjectTexts";
import Screen from "@components/portfolio/ScrollingScreen/Screen";
import Example from "@components/portfolio/Texture";
import { ReactNode } from "react";
import Layout from "src/components/Layout";
import { usePageNumber } from "~/context/scrollContext";
import { usePrimaryBreakpoint } from "~/hooks/useCustomBreakpoint";

const Section = ({
  children,
  customPX,
  pageNumber,
  pageIndex,
  theme,
  ...props
}: {
  children?: ReactNode;
  customPX?: string;
  pageNumber?: number;
  pageIndex?: number;
  theme?: ColorTheme;
} & BoxProps) => (
  <Center
    w="100vw"
    scrollSnapType={"y mandatory"}
    scrollSnapStop={"always"}
    scrollSnapAlign={"start"}
    h="100vh"
    // boxShadow={"dark-lg"}
    {...props}
    sx={{
      "svg, rect, g": { width: "100vw", height: "100vh" },
      svg: { mixBlendMode: "multiply", px: "0" },
    }}
    p="0 !important"
    position="relative"
  >
    {children}
    {/* <ProjectText
      projectKey={THEME_NAMES[pageIndex]}
      position={"absolute"}
      top={"50%"}
      left="0"
      // left={"50%"}
      mx={customPX}
      p="16px"
      // transform={"translate(-50%, -50%)"}
      w="40vw"
      bg={theme.background}
      zIndex={1}
      color={theme.primary}
      rounded={"14px"}
    /> */}
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
];

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
  const { pageNumber } = usePageNumber();

  const theme = useAnimatedTheme(pageNumber);

  return (
    <Layout title="Portfolio">
      <Box
        overflow="scroll"
        scrollSnapType={"y mandatory"}
        // scrollSnapPointsY="repeat(100vh)"
        // h="100vh"
        sx={{
          "&>*": { px: x },

          // scrollSnapPointsY: "repeat(100vh)",
          // scrollSnapType: "y mandatory",
        }}
      >
        <Flex
          w="100vw"
          h="100vh"
          justifyContent="flex-end"
          alignItems="center"
          position="fixed"
          top="0"
          zIndex={1}
        >
          <Flex direction="column">
            <ProjectText
              projectKey={THEME_NAMES[pageNumber]}
              // position={"absolute"}
              // top={"50%"}
              // left="0"
              // left={"50%"}

              p="16px"
              // transform={"translate(-50%, -50%)"}
              w="40vw"
              bg={theme.background}
              zIndex={1}
              color={theme.primary}
              roundedTop={"14px"}
            />
            <Flex w="100%" roundedBottom={"14px"} overflow={"hidden"}>
              <Box h="16px" w="100%" bg={theme.primary} />
              <Box h="16px" w="100%" bg={theme.accent} />
              <Box h="16px" w="100%" bg={theme.background} />
              <Box h="16px" w="100%" bg={theme.secondary} />
              <Box h="16px" w="100%" bg={theme.highlight} />
            </Flex>
          </Flex>
          <Screen />
        </Flex>
        {pageComponents.map((sections, pageIndex) =>
          sections.map((Sect, index) => (
            <Sect
              key={`${pageIndex}-${index}`}
              background={theme.background}
              position={"relative"}
              px="0"
              customPX={x}
              pageIndex={pageIndex}
              theme={theme}
            />
          ))
        )}
      </Box>
    </Layout>
  );
}

export default Portfolio;
