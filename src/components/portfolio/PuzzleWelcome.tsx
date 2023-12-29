// components/PuzzleWelcome.tsx
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import PuzzlePiece, { PieceType } from "./PuzzlePiece";
import { useEffect, useState } from "react";

type PuzzleWelcomeProps = {
  rows?: number;
  cols?: number;
  totalWidth?: number;
  totalHeight?: number;
  videoUrl?: string;
  activeSection?: number;
  pieceShapes?: string[];
  overlap?: boolean;
};

const PuzzleWelcome = ({
  rows = 3,
  cols = 2,
  totalWidth = 1000,
  totalHeight = 562.5,
  videoUrl = "/video_example.mp4",
  activeSection,
  pieceShapes,
  overlap = false,
}: PuzzleWelcomeProps) => {
  const puzzleWidth = totalWidth / cols;
  console.log("🚀 ~ file: PuzzleWelcome.tsx:28 ~ totalWidth:", totalWidth);
  console.log("🚀 ~ file: PuzzleWelcome.tsx:28 ~ cols:", cols);
  console.log("🚀 ~ file: PuzzleWelcome.tsx:28 ~ puzzleWidth:", puzzleWidth);
  const puzzleHeight = totalHeight / rows;
  const [puzzlePieces, setPuzzlePieces] = useState<PieceType[]>([]);

  useEffect(() => {
    const initPuzzlePieces = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        initPuzzlePieces.push({
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
    setPuzzlePieces(initPuzzlePieces);
  }, []);

  useEffect(() => {
    setPuzzlePieces((prevPuzzlePieces) => {
      return prevPuzzlePieces.map((piece, index) => {
        const puzzleWidth = totalWidth / cols;
        const puzzleHeight = totalHeight / rows;

        const col = index % cols;
        const row = Math.floor(index / cols);
        return {
          ...piece,
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
        };
      });
    });
  }, [activeSection]);

  return (
    <Center w="100vw" h="100vh" position={"absolute"}>
      <SimpleGrid columns={2}>
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
              activeSection={activeSection}
              overlap={overlap}
              // pieceShape={
              //   pieceShapes[
              //     Math.round(Math.random() * pieceShapes.length) %
              //       pieceShapes.length
              //   ]
              // }
            />
          ))}
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default PuzzleWelcome;
