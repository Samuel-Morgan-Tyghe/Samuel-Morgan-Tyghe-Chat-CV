import { motion } from "framer-motion";
import { usePageNumber } from "~/context/scrollContext";
import useAnimatedTheme, {
  PAGE_THEME,
  getThemeFromPageNumber,
} from "../PageThemes";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
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
const DrawCircle = () => {
  const { pageNumber } = usePageNumber();

  const theme = useAnimatedTheme(pageNumber);
  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke={theme.accent}
        variants={draw}
        custom={1}
      />
    </motion.svg>
  );
};

export default DrawCircle;
