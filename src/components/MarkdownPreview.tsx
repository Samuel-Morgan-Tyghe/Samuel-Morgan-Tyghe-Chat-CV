import React, { useState, useEffect } from "react";
import { marked } from "marked";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useDisclosure,
  Box,
} from "@chakra-ui/react";

interface MarkdownPreviewProps {
  filePath: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ filePath }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [markdownText, setMarkdownText] = useState("");
  const [htmlContent, setHtmlContent] = useState<any>("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setMarkdownText(text))
      .catch((error) => console.error("Error fetching markdown file:", error));
  }, [filePath]);

  useEffect(() => {
    setHtmlContent(marked(markdownText));
  }, [markdownText]);

  return (
    <>
      <Button onClick={onOpen}>Preview CV</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CV Preview</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              whiteSpace={"pre-wrap"}
              wordBreak={"break-word"}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MarkdownPreview;
