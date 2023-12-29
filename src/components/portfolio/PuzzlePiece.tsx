// components/PuzzlePiece.tsx
import { useTimeout } from "@chakra-ui/react";
import { motion, useAnimationControls, useDragControls } from "framer-motion";
import React, { useEffect, useState } from "react";

export type PieceType = {
  initialPosition: { x: number; y: number };
  correctPosition: { x: number; y: number };
  videoPosition: { x: string; y: string };
  delay: number;
  width: number;
  height: number;
  totalWidth: number;
  totalHeight: number;
  activeSection: number;
  videoUrl: string;
  pieceShape?: string;
  overlap?: boolean;
};

const PuzzlePiece: React.FC<PieceType> = ({
  videoUrl,
  initialPosition,
  correctPosition,
  videoPosition,
  delay,
  width,
  height,
  totalWidth,
  totalHeight,
  activeSection,
  pieceShape,
  overlap,
}) => {
  const viewportHeight = window.innerHeight ?? 0;
  const offset = viewportHeight * activeSection;

  const animationControls = useAnimationControls();

  useEffect(() => {
    onReset();
  }, [activeSection, correctPosition.x, correctPosition.y]);

  const onReset = () => {
    animationControls.start({
      x: correctPosition.x,
      y: correctPosition.y + offset,
    });
  };

  useEffect(() => {
    onReset();
  }, []);

  // const shapeStyles = () => {
  //   switch (pieceShape) {
  //     case "square":
  //       return { borderRadius: "0%" };
  //     case "rectangle":
  //       return Math.random() > 0.5
  //         ? { borderRadius: "100%  100% 0% 0% " }
  //         : { borderRadius: " 0% 0% 100% 100%" };
  //     case "circle":
  //       return { borderRadius: "50%" };
  //     // Add more shapes as needed
  //     default:
  //       return { borderRadius: "0%" };
  //   }
  // };
  return (
    <motion.div
      animate={animationControls}
      drag
      initial={initialPosition}
      transition={{ delay: delay, type: "spring" }}
      style={{
        width: width,
        height: height,
        overflow: "hidden",
        position: "absolute",
        boxShadow: "0 0 1px rgba(0, 0, 0, 0.5)",
        // ...shapeStyles(), // Apply shape-specific styles
        zIndex: overlap ? 1 : "auto", // Adjust z-index if overlapping
      }}
    >
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        preload="auto"
        style={{
          position: "absolute",
          top: videoPosition.y,
          left: videoPosition.x,
          minWidth: totalWidth,
          minHeight: totalHeight,
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
};

export default PuzzlePiece;
