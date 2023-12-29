// components/PuzzleWelcome.tsx
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import PuzzlePiece from "./PuzzlePiece";

const PuzzleWelcome = () => {
  const videoUrl = "/video_example.mp4";

  const rows = 4;
  const cols = 5;
  const totalWidth = 1000; // Total width of the puzzle
  const totalHeight = 562.5; // Total height of the puzzle
  const puzzleWidth = totalWidth / cols;
  const puzzleHeight = totalHeight / rows;
  let puzzlePieces = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      puzzlePieces.push({
        initialPosition: {
          x: 50 + col * (40 * (Math.random() * 1)),
          y: 50 + row * (35 * (Math.random() * 1)),
        },
        correctPosition: { x: puzzleWidth * col, y: puzzleHeight * row },
        videoPosition: {
          x: `${Math.round(-100 * col)}%`,
          y: `${Math.round(-100 * row)}%`,
        },
        width: puzzleWidth,
        height: puzzleHeight,
        delay: 0.05 * (row * cols + col),
      });
    }
  }

  return (
    <Center w="100vw" h="100vh">
      <Box
        position={"relative"}
        // overflow={"hidden"}
        width={totalWidth}
        height={totalHeight}
      >
        {puzzlePieces.map((piece, index) => (
          <PuzzlePiece
            key={index}
            videoUrl={videoUrl}
            initialPosition={piece.initialPosition}
            correctPosition={piece.correctPosition}
            videoPosition={piece.videoPosition}
            width={piece.width}
            height={piece.height}
            delay={piece.delay}
            totalWidth={totalWidth}
            totalHeight={totalHeight}
          />
        ))}
      </Box>
    </Center>
  );
};

export default PuzzleWelcome;
