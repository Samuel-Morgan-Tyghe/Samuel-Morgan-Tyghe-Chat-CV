// components/PuzzlePiece.tsx
import { motion } from "framer-motion";
import React from "react";

interface PuzzlePieceProps {
  videoUrl: string;
  initialPosition: { x: number; y: number };
  correctPosition: { x: number; y: number };
  videoPosition: { x: string; y: string }; // Position of the video inside the piece
  delay: number;
  width: number;
  height: number;
  totalWidth: number;
  totalHeight: number;
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({
  videoUrl,
  initialPosition,
  correctPosition,
  videoPosition,
  delay,
  width,
  height,
  totalWidth,
  totalHeight,
}) => {
  return (
    <motion.div
      drag
      initial={initialPosition}
      animate={{ x: correctPosition.x, y: correctPosition.y }}
      transition={{ delay: delay, type: "spring" }}
      style={{
        width: width,
        height: height,
        overflow: "hidden",
        position: "absolute",
        // boxShadow: "0 0 1px rgba(0, 0, 0, 0.5)",
      }}
    >
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: videoPosition.y,
          left: videoPosition.x,
          minWidth: totalWidth,
          minHeight: totalHeight,
        }}
      />
    </motion.div>
  );
};

export default PuzzlePiece;
