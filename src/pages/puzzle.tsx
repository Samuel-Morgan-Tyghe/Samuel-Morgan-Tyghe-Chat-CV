import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import HeroText from "src/components/HeroText";
import Layout from "src/components/Layout";
import PuzzleWelcome from "src/components/PuzzleWelcome";
import React, { useEffect, useState } from "react";

function puzzle() {
  return (
    <Layout>
      <Box w="100dvw" h="100dvh" position={"absolute"}>
        <PuzzleWelcome />
        <HeroText />
      </Box>
    </Layout>
  );
}

export default puzzle;
