// pages/api/chat.js
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

export default async function handler(req, res) {
  const openAIApiKey = process.env.OPENAIKEY;

  const chat = new ChatOpenAI({
    temperature: 1,
    openAIApiKey: openAIApiKey,
    maxTokens: 300,
  });

  const { input, promptInjection } = req.body;

  const response = await chat.call([
    new SystemChatMessage(promptInjection),
    new HumanChatMessage(input),
  ]);

  res.status(200).json({ result: response.text });
}
