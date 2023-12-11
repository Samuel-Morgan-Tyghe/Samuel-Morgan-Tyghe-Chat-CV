import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";

export const handler = async function (req, res) {
  const openAIApiKey = process.env.OPENAIKEY;

  const chat = new ChatOpenAI({
    temperature: 0.8,
    openAIApiKey: openAIApiKey,
  });

  const { input = "test" } = JSON.parse(req?.body);

  function truncate(str, no_words) {
    return str.split(" ").splice(0, no_words).join(" ");
  }

  let response = {};

  const messages = [new HumanChatMessage(truncate(input, 2000) ?? "")];
  try {
    response = await chat.call(messages);
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log("🚀 ~ error:", error.message);
    return { statusCode: 500, body: JSON.stringify(error) };
  }

  return { statusCode: 200, body: JSON.stringify({ result: response?.text }) };
};
