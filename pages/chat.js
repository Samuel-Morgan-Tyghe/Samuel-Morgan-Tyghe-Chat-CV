import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Img,
  Input,
} from "@chakra-ui/react";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Alfred from "../assets/alfred.jpg";

import FadeInText from "@components/FadeInText";
import { AdditionalDetails, CV, promptInjection } from "Utils/cv";

const chat = new ChatOpenAI({
  temperature: 0,
  openAIApiKey: "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",
});

// async function handleUserInput(input) {
//   const response = await chat.call([new HumanChatMessage(input)]);
//   return response.text;
// }

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

  return (
    <Center h="100vh" w="100vw">
      <Box width={"100%"} maxW="800px" bg="gray.100" p={4} borderRadius="md">
        <Heading as="h1" mb={4}>
          Chat App
        </Heading>
        <Flex direction="column" gap="13px" height="500px" overflow="auto">
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
                    icon={<Img src={Alfred} />}
                    bg="teal.400"
                    color="white"
                  />
                ) : (
                  <Avatar name="Alfred" bg="gray.200" color="black" />
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
                placeholder="Type your message..."
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
