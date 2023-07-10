import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  IconButton,
  Input,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

import { InfoIcon } from "@chakra-ui/icons";
import FadeInText from "@components/FadeInText";
import { getPromptInjection } from "Utils/cv";
import { getJobSpec } from "Utils/jobSpec";
import { useRouter } from "next/router";
import ContextModal from "./ContextModal";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { jobspec, username } = router.query;
  const user = (username as string) ?? "user";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentDocuments, setCurrentDocuments] = useState(null);

  const jobSpecString = getJobSpec(jobspec);

  async function handleUserInput(input) {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: input,
        promptInjection: getPromptInjection(jobSpecString, username),
        messages: messages,
      }),
    });

    return response?.json();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const newMessage = {
      role: user,
      content: input,
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    const response = await handleUserInput(input);
    const newResponseMessage = {
      role: "Alfred Pennyworth",
      content: response?.result,
      sourceDocuments: response?.context,
    };

    const updatedMessagesWithResponse = [
      ...updatedMessages,
      newResponseMessage,
    ];
    setMessages(updatedMessagesWithResponse);

    setInput("");
    setIsLoading(false);
  }

  const chatContainerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true); // Add this state

  useLayoutEffect(() => {
    const scrollChatToBottom = () => {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    };

    if (autoScroll) {
      scrollChatToBottom();
    }
  }, [messages, autoScroll]);

  return (
    <Center h="100vh" w="100vw">
      <Box width={"100%"} maxW="800px" bg="gray.100" p={4} borderRadius="md">
        <Heading as="h1" mb={4}>
          Sam Morgan-Tyghe Chat CV
        </Heading>
        <Flex
          direction="column"
          gap="13px"
          height="500px"
          overflow="auto"
          ref={chatContainerRef}
          onScroll={() => {
            // Adjust this event handler
            if (autoScroll) {
              // Only change autoScroll state if it's currently true
              const isAtBottom =
                chatContainerRef.current.scrollHeight -
                  chatContainerRef.current.scrollTop <=
                chatContainerRef.current.clientHeight + 10;

              if (!isAtBottom) {
                // If not at the bottom, disable auto-scroll
                setAutoScroll(false);
              }
            }
          }}
        >
          <Flex direction="column" gap="13px">
            {messages.map((message, index) => (
              <Box
                key={index}
                borderRadius="md"
                bg={message.role === user ? "teal.400" : "gray.200"}
                color={message.role === user ? "white" : "black"}
                display="flex"
                gap="13px"
                p="13px"
                alignItems="center"
              >
                {message.role === user ? (
                  <Avatar
                    name={user}
                    icon={<FaUser />}
                    bg="teal.400"
                    color="white"
                    border="2px solid white"
                    width={"50px"}
                    height={"50px"}
                    minW={"50px"}
                    minH={"50px"}
                    position="relative"
                    rounded="4px"
                  />
                ) : (
                  <Box
                    width={"50px"}
                    height={"50px"}
                    minW={"50px"}
                    minH={"50px"}
                    position="relative"
                    rounded="4px"
                    sx={{
                      "&>span": {
                        borderRadius: "4px",
                      },
                    }}
                  >
                    <Image
                      src="/images/alfred.jpg"
                      alt="Avatar"
                      layout="fill"
                    />
                  </Box>
                )}
                <FadeInText
                  py="13px"
                  text={`${message.role}: ${message.content}`}
                  onTextRevealComplete={() => {
                    if (autoScroll) {
                      // Add this condition
                      chatContainerRef.current.scrollTop =
                        chatContainerRef.current.scrollHeight;
                    }
                  }}
                />
                {message.sourceDocuments &&
                  message.sourceDocuments.length > 0 && (
                    <Tooltip label="Source Documents" ml="auto">
                      <IconButton
                        ml="auto"
                        size="sm"
                        icon={<InfoIcon />}
                        onClick={() => {
                          onOpen();
                          setCurrentDocuments(message.sourceDocuments);
                        }}
                        aria-label={""}
                      />
                    </Tooltip>
                  )}
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" gap="13px" py="13px" h="100%" overflow="auto">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                type="text"
                value={input}
                placeholder="Ask me anything about Sam..."
                onChange={(e) => setInput(e.target.value)}
              />
            </FormControl>
            <Button
              isLoading={isLoading}
              type="submit"
              mt={4}
              colorScheme="blue"
            >
              Send
            </Button>
          </form>
        </Flex>
      </Box>
      <ContextModal
        isOpen={isOpen}
        onClose={onClose}
        currentDocuments={currentDocuments}
      />
    </Center>
  );
}
