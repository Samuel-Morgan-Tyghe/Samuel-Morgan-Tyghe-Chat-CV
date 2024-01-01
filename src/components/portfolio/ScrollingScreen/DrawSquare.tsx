import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const DrawSquare = () => {
  return (
    <Box width="100%" height="100%">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200" // Adjust the viewBox to suit your needs
        initial="hidden"
        animate="visible"
      >
        <motion.rect
          x="0"
          y="0"
          width="100%"
          height="100"
          rx="20"
          stroke="#0099ff"
          variants={draw}
          custom={3}
        />
      </motion.svg>
    </Box>
  );
};

export default DrawSquare;
