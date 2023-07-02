import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const FadeInText = ({ text, ...additionalProps }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let delay = 0;
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        setDisplayText((prevText) => prevText + text[i]);
      }, delay);
      delay += 50; // Adjust the delay between characters
    }
  }, [text]);

  return (
    <Box overflow="hidden" {...additionalProps}>
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
