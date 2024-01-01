import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Spinner,
} from "@chakra-ui/react";
import { useScroll, useSpring } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import DrawCircle from "./DrawCircle";
import { Lefty, Refresh, Righty } from "./Icons";
const Screen = ({
  children,
  pageNumber,
  setPageNumber,
  activeSection,
  totalPageScrollLength,
  currentPageScrollLength,
}: {
  children?: ReactNode;
  pageNumber: number;
  setPageNumber: (number) => void;
  activeSection: number;
  totalPageScrollLength: number;
  currentPageScrollLength: number;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { scrollYProgress } = useScroll();
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      const pageNumber = Math.floor(
        value * (totalPageScrollLength / currentPageScrollLength)
      );
      const scrollPRelative =
        value * (totalPageScrollLength / currentPageScrollLength) - pageNumber;

      setPageNumber(pageNumber);

      if (targetRef.current) {
        const targetScrollMax =
          targetRef.current.scrollHeight - targetRef.current.clientHeight;

        const scrollPosition = scrollPRelative * targetScrollMax;

        // Use spring to animate scroll
        spring.set(scrollPosition);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, totalPageScrollLength, currentPageScrollLength]);

  // Initialize the spring
  const spring = useSpring(0, { stiffness: 100, damping: 30 });

  // Apply the spring value to the scroll position
  useEffect(() => {
    const unsubscribe = spring.onChange((value) => {
      if (targetRef.current) {
        targetRef.current.scrollTop = value;
      }
    });

    return () => unsubscribe();
  }, [spring]);

  const addFakeLoading = () => {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
        setIsLoading(false);
      }, Math.random() * 1000);
    });
  };

  const handleRefresh = () => addFakeLoading();
  const increasePage = async () => {
    if (pageNumber < 4) {
      await addFakeLoading();

      setPageNumber(pageNumber + 1);
    }
  };

  const decreasePage = async () => {
    if (pageNumber > 0) {
      await addFakeLoading();
      setPageNumber(pageNumber - 1);
    }
  };
  return (
    <Flex
      overflow={"hidden"}
      rounded="14px"
      direction={"column"}
      w={"720px"}
      h="640px"
      position="fixed"
    >
      <Flex
        roundedTop="14px"
        border={"1px solid"}
        borderBottom={"none"}
        direction={"column"}
        p="16px"
        gap="16px"
        position="relative"
      >
        <Box filter={"blur(4px)"} position={"absolute"} w="100%" h="100%" />
        <Flex>
          <DrawCircle />
          <DrawCircle />
          <DrawCircle />
        </Flex>
        <Flex w="100%" gap="4px">
          <IconButton
            variant={"ghost"}
            icon={<Lefty />}
            boxSize={"16px"}
            aria-label={""}
            onClick={decreasePage}
          />

          <IconButton
            variant={"ghost"}
            icon={<Righty />}
            boxSize={"16px"}
            aria-label={""}
            onClick={increasePage}
          />
          <IconButton
            variant={"ghost"}
            icon={<Refresh />}
            boxSize={"16px"}
            aria-label={""}
            onClick={handleRefresh}
          />

          <Box border={"1px solid"} h="16px" w={"100%"} rounded="full" />
        </Flex>
      </Flex>

      <Box
        overflow="scroll"
        roundedBottom="14px"
        border={"1px solid"}
        h="640px"
        ref={targetRef}
      >
        {isLoading ? (
          <Center w={"100%"} h={"640px"}>
            <Spinner size="xl" />
          </Center>
        ) : (
          <Image
            src={`/Assets/images/Portfolio/Screens-portfolio/${pageNumber}.png`}
          />
        )}
      </Box>
    </Flex>
  );
};

export default Screen;
