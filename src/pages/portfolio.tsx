import { BoxProps, Center, CenterProps, Image, Text } from "@chakra-ui/react";
import Screen from "@components/portfolio/ScrollingScreen/Screen";
import { scrollRanges } from "@components/portfolio/ScrollingScreen/scrollUtil";
import { useScroll } from "framer-motion";
import { ReactNode, cloneElement, useEffect, useState } from "react";
import Layout from "src/components/Layout";

const Section = ({
  children,
  ...props
}: { children?: ReactNode } & BoxProps) => (
  <Center w="100vw" h="100vh" boxShadow={"dark-lg"} {...props}>
    {children}
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
  // [
  //   () => <Section key="4">4</Section>,
  //   () => <Section key="5">5</Section>,
  //   () => <Section key="6">6</Section>,
  // ],
  // [
  //   () => <Section key="7">7</Section>,
  //   () => <Section key="8">8</Section>,
  //   () => <Section key="9">9</Section>,
  // ],
  // [
  //   () => <Section key="7">7</Section>,
  //   () => <Section key="8">8</Section>,
  //   () => <Section key="9">9</Section>,
  // ],
  // [
  //   () => <Section key="7">7</Section>,
  //   () => <Section key="8">8</Section>,
  //   () => <Section key="9">9</Section>,
  // ],
  // [
  //   () => <Section key="7">7</Section>,
  //   () => <Section key="8">8</Section>,
  //   () => <Section key="9">9</Section>,
  // ],
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
  const [pageNumber, setPageNumber] = useState(0);

  const [activeSection, setActiveSection] = useState(0);

  const totalPageScrollLength = pageComponents.reduce(
    (acc, sections) => acc + sections.length,
    0
  );

  const currentPageScrollLength =
    pageNumber < pageComponents.length ? pageComponents[pageNumber].length : 0;

  useEffect(() => {
    const handleScroll = () => {
      const verticalScrollPosition = window?.scrollY ?? 0;
      const viewportHeight = window?.innerHeight ?? 0;
      setActiveSection(
        Math.floor((verticalScrollPosition + 30) / viewportHeight)
      );

      const scrollPosition = verticalScrollPosition / viewportHeight;

      const currentPage = scrollRanges.findIndex(
        ({ rangeStart, rangeEnd }) =>
          scrollPosition >= rangeStart && scrollPosition < rangeEnd
      );

      // Now set this page number to your Screen component
      if (currentPage !== -1) {
        setPageNumber(currentPage);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* <Center
        w={activeSection === 1 ? "50vw" : "100vw"}
        h="100vh"
        position={"absolute"}
        right={0}
      >
        <PuzzleWelcome
          {...sectionConfigs[activeSection]}
          activeSection={activeSection}
        />
      </Center> */}
      <Center w="100vw" h="100vh" boxShadow={"dark-lg"}>
        <Screen
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          activeSection={activeSection}
          totalPageScrollLength={totalPageScrollLength}
          currentPageScrollLength={currentPageScrollLength}
        />
      </Center>
      {pageComponents.map((sections, pageIndex) =>
        sections.map(
          (Sect, index) => (
            <Sect
              key={`${pageIndex}-${index}`}
              background={randomColors[pageIndex]}
            />
          )
          // cloneElement(section, { key: `${pageIndex}-${index}` })
        )
      )}
    </Layout>
  );
}

export default Portfolio;

const sectionConfigs = [
  {
    rows: 3,
    cols: 4,
    pieceShapes: ["square", "rectangle", "triangle", "circle"],
    overlap: false,
    totalWidth: 1000,
    totalHeight: 562.5,
    videoUrl: "/video_example2.webm",
  },
  {
    rows: 3,
    cols: 4,
    pieceShapes: ["square", "rectangle", "triangle", "circle"],
    overlap: false,
    totalWidth: 562.5,
    totalHeight: 562.5,
    videoUrl: "/video_example2.webm",
  },
  {
    rows: 3,
    cols: 4,
    pieceShapes: ["square", "rectangle", "triangle", "circle"],
    overlap: false,
    totalWidth: 1000,
    totalHeight: 562.5,
    videoUrl: "/video_example2.webm",
  },
  {
    rows: 3,
    cols: 4,
    pieceShapes: ["square", "rectangle", "triangle", "circle"],
    overlap: false,
    totalWidth: 1000,
    totalHeight: 562.5,
    videoUrl: "/video_example2.webm",
  },
  {
    rows: 3,
    cols: 4,
    pieceShapes: ["square", "rectangle", "triangle", "circle"],
    overlap: false,
    totalWidth: 1000,
    totalHeight: 562.5,
    videoUrl: "/video_example2.webm",
  },
  {
    rows: 3,
    cols: 4,
    pieceShapes: ["square", "rectangle", "triangle", "circle"],
    overlap: false,
    totalWidth: 1000,
    totalHeight: 562.5,
    videoUrl: "/video_example2.webm",
  },
  {
    rows: 3,
    cols: 4,
    pieceShapes: ["square", "rectangle", "triangle", "circle"],
    overlap: false,
    totalWidth: 1000,
    totalHeight: 562.5,
    videoUrl: "/video_example2.webm",
  },
  {
    rows: 3,
    cols: 4,
    pieceShapes: ["square", "rectangle", "triangle", "circle"],
    overlap: false,
    totalWidth: 1000,
    totalHeight: 562.5,
    videoUrl: "/video_example2.webm",
  },
];
