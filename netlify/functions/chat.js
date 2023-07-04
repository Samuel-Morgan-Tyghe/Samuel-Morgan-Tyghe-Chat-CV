// pages/api/chat.js
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

export const handler = async function (event, context) {
  const openAIApiKey = process.env.OPENAIKEY;

  const chat = new ChatOpenAI({
    temperature: 1,
    openAIApiKey: openAIApiKey,
    maxTokens: 300,
  });

  const { input, promptInjection, CV, AdditionalDetails } = JSON.parse(
    event.body
  );

  const response = await chat.call([
    new SystemChatMessage(promptInjection),
    new HumanChatMessage(input),
  ]);

  return {
    statusCode: 200,
    body: JSON.stringify({ result: response.text }),
  };
};
