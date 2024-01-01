import { motion } from "framer-motion";
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
const DrawIcon = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
        }}
        // variants={draw}
        strokeWidth={4}
        strokeDasharray="0 1"
        fill="#33363F"
        d="M2 7L1.29289 6.29289L0.585786 7L1.29289 7.70711L2 7ZM17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6V8ZM7.29289 0.292893L1.29289 6.29289L2.70711 7.70711L8.70711 1.70711L7.29289 0.292893ZM1.29289 7.70711L7.29289 13.7071L8.70711 12.2929L2.70711 6.29289L1.29289 7.70711ZM2 8H17V6H2V8Z"
      />
    </motion.svg>
  );
};

export default DrawIcon;
