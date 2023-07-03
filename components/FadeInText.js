import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const FadeInText = ({ text, onTextRevealComplete, ...additionalProps }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let delay = 0;
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setDisplayText((prevText) => {
          if (i === text.length - 1) {
            // when it's the last character
            onTextRevealComplete(); // call the function passed from props
          }
          return prevText + text[i];
        });
      }, delay);
      delay += 50; // Adjust the delay between characters
    }
  }, [text, onTextRevealComplete]);

  return (
    <Box
      overflow="hidden"
      style={{
        maxHeight: displayText ? "1000px" : "0", // Adjust the max-height value
        transition: "max-height 0.3s ease-out", // Adjust the transition duration and timing function
      }}
      {...additionalProps}
    >
      <Box
        as="span"
        animation="fade-in 1s linear forwards"
        whiteSpace="pre-wrap"
      >
        {displayText}
      </Box>
    </Box>
  );
};

export default FadeInText;
