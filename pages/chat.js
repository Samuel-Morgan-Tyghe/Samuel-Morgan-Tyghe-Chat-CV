import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  Input,
} from "@chakra-ui/react";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

import FadeInText from "@components/FadeInText";
import { AdditionalDetails, CV, promptInjection } from "Utils/cv";

const chat = new ChatOpenAI({
  temperature: 1,
  openAIApiKey: "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",
  maxTokens: 150,
});

async function handleUserInput(input) {
  const response = await chat.call([
    new SystemChatMessage(promptInjection),
    new HumanChatMessage(input),
    new SystemChatMessage(CV),
    new SystemChatMessage(AdditionalDetails),
  ]);

  return response.text;
}
export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const newMessage = {
      role: "user",
      content: input,
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);

    const response = await handleUserInput(input);
    const newResponseMessage = {
      role: "Alfred Pennyworth",
      content: response,
    };
    const updatedMessagesWithResponse = [
      ...updatedMessages,
      newResponseMessage,
    ];
    setMessages(updatedMessagesWithResponse);

    setResponse(response);
    setInput("");
    setIsLoading(false);
  }

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container on component update
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    console.log(
      "🚀 ~ file: chat.js:73 ~ useEffect ~ chatContainerRef:",
      chatContainerRef
    );
  }, [messages]); // Assuming `messages` is the state representing chat messages

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
            // Check if user has scrolled near the bottom (within 10 pixels)
            const isNearBottom =
              chatContainerRef.current.scrollHeight -
                chatContainerRef.current.scrollTop <=
              chatContainerRef.current.clientHeight + 10;

            if (isNearBottom) {
              // Scroll to the bottom if near the bottom
              chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
            }
          }}
        >
          <Flex direction="column" gap="13px">
            {messages.map((message, index) => (
              <Box
                key={index}
                borderRadius="md"
                bg={message.role === "user" ? "teal.400" : "gray.200"}
                color={message.role === "user" ? "white" : "black"}
                display="flex"
              >
                {message.role === "user" ? (
                  <Avatar
                    name="user"
                    icon={<FaUser />}
                    bg="teal.400"
                    color="white"
                  />
                ) : (
                  <Avatar
                    name="Alfred"
                    src={
                      <Image
                        src="/alfred.jpg"
                        alt="Avatar"
                        width={50}
                        height={50}
                      />
                    }
                    bg="gray.200"
                    color="black"
                  />
                )}
                <FadeInText
                  py="13px"
                  text={`${message.role}: ${message.content}`}
                />
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
        {/* <FadeInText text={response} /> */}
        {/* <Text mt={4}>{response}</Text> */}
      </Box>
    </Center>
  );
}
