import { Button, Center, Text } from "@chakra-ui/react";
import Container from "@components/grid/Container/Container";
import PuzzleWelcome from "@components/portfolio/PuzzleWelcome";
import { useEffect, useState } from "react";
import Layout from "src/components/Layout";

function Portfolio() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const verticalScrollPosition = window?.scrollY ?? 0;
      const viewportHeight = window?.innerHeight ?? 0;
      setActiveSection(
        Math.floor((verticalScrollPosition + 30) / viewportHeight)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionComponents = [1, 2, 3, 4, 5];

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

  return (
    <Layout>
      <Button onClick={() => setActiveSection(1)}>active 1</Button>
      <Button onClick={() => setActiveSection(0)}>active 0</Button>
      <Center
        w={activeSection === 1 ? "50vw" : "100vw"}
        h="100vh"
        position={"absolute"}
        right={0}
      >
        <PuzzleWelcome
          {...sectionConfigs[activeSection]}
          activeSection={activeSection}
        />
      </Center>

      {sectionComponents.map((_, index) => (
        <Container fluid={true} key={index}>
          <Center w="100vw" h="100vh" boxShadow={"dark-lg"}>
            <Text>{index}</Text>
          </Center>
        </Container>
      ))}
    </Layout>
  );
}

export default Portfolio;
