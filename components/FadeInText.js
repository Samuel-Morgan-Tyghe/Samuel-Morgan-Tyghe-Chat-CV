import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const FadeInText = ({ text, onTextRevealComplete, ...additionalProps }) => {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <Box
      overflow="hidden"
      style={{
        transition: "max-height 0.3s ease-out", // Adjust the transition duration and timing function
      }}
      sx={{
        span: {
          "::after": { content: showCursor ? "'|'" : "''" },
        },
      }}
      {...additionalProps}
    >
      <TypeAnimation
        cursor={showCursor}
        style={{ whiteSpace: "pre-line", display: "block" }}
        sequence={[
          () => onTextRevealComplete(),
          0,
          () => setShowCursor(true),
          text,
          1000,
          () => setShowCursor(false),
          0,
          () => onTextRevealComplete(),
        ]}
        speed={99}
        repeat={0}
      />
    </Box>
  );
};

export default FadeInText;
