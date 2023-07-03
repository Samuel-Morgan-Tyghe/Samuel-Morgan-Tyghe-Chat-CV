import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const FadeInText = ({ text, onTextRevealComplete, ...additionalProps }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let delay = 0;
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setDisplayText((prevText) => {
          return prevText + text[i];
        });
      }, delay);
      delay += 5; // Adjust the delay between characters
    }
  }, [text, onTextRevealComplete]);

  const [showCursor, setShowCursor] = useState(true);
  return (
    <Box
      overflow="hidden"
      style={{
        // maxHeight: displayText ? "1000px" : "0", // Adjust the max-height value
        transition: "max-height 0.3s ease-out", // Adjust the transition duration and timing function
      }}
      {...additionalProps}
    >
      <TypeAnimation
        cursor={showCursor}
        style={{ whiteSpace: "pre-line", display: "block" }}
        sequence={[
          () => onTextRevealComplete(),
          () => setShowCursor(true),
          text,
          1000,
          () => setShowCursor(false),
          () => onTextRevealComplete(),
        ]}
        speed={99}
        repeat={0}
      />
    </Box>
  );
};

export default FadeInText;
