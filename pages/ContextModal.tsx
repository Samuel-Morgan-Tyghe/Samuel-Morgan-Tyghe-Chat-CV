import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { AnimateAllChildren } from "Utils/Animate";
import { colorArray } from "Utils/constsColors";

function ContextModal({ isOpen, onClose, currentDocuments }) {
  function hexToRGBA(hex, alpha = 1) {
    // Remove the '#' from the hex color
    hex = hex.replace("#", "");

    // Check if it is a shorthand hex (e.g., #FFF)
    if (hex.length === 3) {
      hex = hex.replace(/(.)/g, "$1$1");
    }

    // Parse the hex values for red, green, and blue
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    // Set the default alpha value to 1
    var a = alpha;

    // Return the RGBA value
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  function getRandomColor() {
    const randomI = Math.floor(Math.random() * colorArray.length);
    const hexColor = colorArray[randomI];
    const rgbaColor = hexToRGBA(hexColor, 0.3);

    return rgbaColor;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Source Documents</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" gap="28px">
            <AnimateAllChildren withProps={false}>
              {currentDocuments &&
                currentDocuments.map((doc, docIndex) => (
                  <Text
                    borderRadius="8px"
                    p="8px"
                    bgGradient={`linear(to-r, ${getRandomColor()}, ${getRandomColor()})`}
                    key={docIndex}
                    sx={{
                      animation: "gradient 5s ease infinite",
                      backgroundSize: "200% 200%",
                      "@keyframes gradient": {
                        "0%": {
                          backgroundPosition: "100% 0%",
                        },
                        "50%": {
                          backgroundPosition: "0% 100%",
                        },
                        "100%": {
                          backgroundPosition: "100% 0%",
                        },
                      },
                    }}
                    whiteSpace="pre-line"
                  >
                    {doc.pageContent}
                  </Text>
                ))}
            </AnimateAllChildren>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ContextModal;
