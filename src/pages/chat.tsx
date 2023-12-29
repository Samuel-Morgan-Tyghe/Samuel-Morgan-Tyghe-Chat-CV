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
  Link,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useLayoutEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

import { InfoIcon } from "@chakra-ui/icons";
import DownloadCV from "src/components/DownloadCV";
import FadeInText from "src/components/FadeInText";
import { getPromptInjection } from "../Utils/cv";
import { getJobSpec } from "src/Utils/jobSpec";
import { useRouter } from "next/router";
import ContextModal from "./ContextModal";
import MarkdownPreview from "src/components/MarkdownPreview";

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

  const fetchData = async (url, body, n = 3) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      if (n === 1) {
        console.error(`Failed after 3 retries: ${error.message}`);
        throw error; // If no retries left, throw the error
      }
      console.log(`Retrying due to ${error.message}. Retries left: ${n - 1}`);

      // Wait for 1 second before retrying to avoid immediate consecutive calls
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Recursively call fetchData with decremented retry count
      return fetchData(url, body, n - 1);
    }
  };

  const fetchSimilaritySearch = (input) => {
    return fetchData("/api/similaritySearch", { input });
  };

  const fetchChat = (input) => {
    return fetchData("/api/chat", { input });
  };

  async function handleUserInput(input) {
    try {
      // Call the similarity search endpoint first
      const similaritySearchResponse = await fetchSimilaritySearch(input);

      const semanticSearchContext = `These results are from a Samuel Morgans CV: "${similaritySearchResponse.context}"`;

      // Construct the appendHistory string
      const appendHistory =
        "\nIf necessary, utilize the below chat history as additional context:" +
        JSON.stringify(messages);

      const combinedInput = `promptSetup: "${getPromptInjection(
        jobSpecString,
        username
      )}"\n UserInput: ${input}\n context: ${semanticSearchContext} ${appendHistory}`;
      // Call the chat endpoint with the semanticSearchContext
      const chatResponse = await fetchChat(
        `promptSetup: "${getPromptInjection(
          jobSpecString,
          username
        )}"\n UserInput: ${input}\n context: ${semanticSearchContext} `
      );

      return {
        result: chatResponse.result,
        context: similaritySearchResponse.context,
      };
    } catch (error) {
      console.error("Error while fetching chat response:", error);
      // Handle the error as you see fit, perhaps by displaying an error message to the user.
      return null; // or an appropriate fallback value
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const newMessage = {
      role: user,
      content: input,
    };
    let updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    const response = await handleUserInput(input);

    if (response) {
      const newResponseMessage = {
        role: "Alfred Pennyworth",
        content: response?.result,
        sourceDocuments: response?.context,
      };

      updatedMessages = [...updatedMessages, newResponseMessage];
      setMessages(updatedMessages); // Corrected this line
    } else {
      // Handle the failure here by adding an error message to the chat
      const errorMessage = {
        role: "System",
        content: "Error with asking question. Please try again later.",
      };

      updatedMessages = [...updatedMessages, errorMessage];
      setMessages(updatedMessages); // Corrected this line
      console.error("Failed to fetch chat response.");
    }

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
                      backgroundImage: `url("/images/alfred.jpg")`, // Set background image using CSS
                      backgroundSize: "cover", // Cover the container
                      backgroundRepeat: "no-repeat", // Prevent repeating the image
                    }}
                  >
                    {/* <Image
                      src="/images/alfred.jpg"
                      alt="Alfred"
                      layout="fill"
                      objectFit="cover"
                    /> */}
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
            <Flex justifyContent="space-between" alignItems="center" mt={4}>
              <Button isLoading={isLoading} type="submit" colorScheme="blue">
                Send
              </Button>
              <Button>
                <DownloadCV />
              </Button>
            </Flex>
          </form>
        </Flex>
        <Flex ml="auto" w="100%" justifyContent="space-between">
          <MarkdownPreview filePath="/Samuel_Morgan-Tyghe_CV.md" />

          <Button>
            <Link
              ml="auto"
              href="https://samuel-morgan-tyghe.github.io/3d-Desk-CV/dist/index.html"
              isExternal
              color="blue.500"
            >
              View My 3D Desk CV
            </Link>
          </Button>
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
