import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const HeroText = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 2000); // Adjust the timing as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <Flex
      position={"absolute"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
      zIndex={1}
      flexDirection={"column"}
      filter={isBlurred ? "blur(10px)" : "blur(0px)"}
      pointerEvents={"none"}
      transitionDuration={"0.5s"}
      transition={"filter 0.5s ease-in-out"}
    >
      <Heading color="white">Samuel Morgan-Tyghe</Heading>
      <Text color="white">Web Developer</Text>
    </Flex>
  );
};

export default HeroText;
