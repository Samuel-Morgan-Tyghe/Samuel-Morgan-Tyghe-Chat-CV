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
import Tilty from "react-tilty";
import { usePageNumber } from "~/context/scrollContext";
import DrawCircle from "./DrawCircle";
import { Lefty, Refresh, Righty } from "./Icons";
import useAnimatedTheme, {
  THEME_NAMES,
  getThemeFromPageNumber,
} from "../PageThemes";

const Screen = ({ children }: { children?: ReactNode }) => {
  const {
    pageNumber,
    setPageNumber,
    activeSection,
    setActiveSection,
    totalPageScrollLength,
    currentPageScrollLength,
  } = usePageNumber();
  const theme = useAnimatedTheme(pageNumber);

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
      if (pageNumber < 5) setPageNumber(pageNumber);

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

  const buttonProps = {
    "aria-label": "",
    minW: "30px",
    minH: "30px",
    h: "30px",
    w: "30px",
    p: "0",
    bg: theme.accent,
    variant: "ghost",
    _hover: {
      bg: theme.secondary,
      svg: {
        "*": {
          // fill: theme.accent,
          // strokeColor: theme.accent,
        },
      },
    },
    _active: {
      bg: theme.primary,
    },
  };

  return (
    <Box position="fixed" zIndex={1}>
      <Tilty reverse={true} max={25}>
        <Flex
          overflow={"hidden"}
          rounded="14px"
          direction={"column"}
          w={"720px"}
          h="640px"
          transform="perspective(800px) rotateY(-10deg)" // Apply 3D rotation
          transformOrigin="right center" // Set the origin of transformation to the right center
          // boxShadow={"dark-lg"}
          // boxShadow={}
          filter={`drop-shadow(5px 5px 3px ${theme.accent})`}
        >
          <Flex
            roundedTop="14px"
            border={"1px solid"}
            borderBottom={"none"}
            direction={"column"}
            p="16px"
            gap="16px"
          >
            <Flex
              sx={{
                "circle, square, line": {
                  strokeWidth: "10px",
                  strokeLinecap: "round",
                  fill: "transparent !important",
                },
              }}
            >
              <DrawCircle />
              <DrawCircle />
              <DrawCircle />
            </Flex>
            <Flex
              w="100%"
              gap="8px"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <IconButton
                icon={<Lefty />}
                onClick={decreasePage}
                {...buttonProps}
              />

              <IconButton
                icon={<Righty />}
                onClick={increasePage}
                {...buttonProps}
              />
              <IconButton
                icon={<Refresh />}
                onClick={handleRefresh}
                {...buttonProps}
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
              <Spin />
            ) : (
              <Image
                src={`/Assets/images/Portfolio/Screens-portfolio/${THEME_NAMES[pageNumber]}.png`}
                fallback={<Spin />}
              />
            )}
          </Box>
        </Flex>
      </Tilty>
    </Box>
  );
};

const Spin = () => (
  <Center w={"100%"} h={"640px"}>
    <Spinner size="xl" />
  </Center>
);

export default Screen;
