// pages/api/chat.js
import { PineconeClient } from "@pinecone-database/pinecone";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
import { PineconeStore } from "langchain/vectorstores/pinecone";

const openAIApiKey = process.env.OPENAIKEY;
const pineConeApiKey = process.env.PINEKEY;

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: openAIApiKey,
});

function truncate(str, no_words) {
  return str.split(" ").splice(0, no_words).join(" ");
}

export default async function handler(req, res) {
  const client = new PineconeClient();
  await client.init({
    apiKey: pineConeApiKey,
    environment: "asia-southeast1-gcp-free",
  });
  const pineconeIndex = client.Index("chat-cv");

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
  });

  const { input, promptInjection, messages } = req.body;

  const appendHistory =
    "\nIf necessary, utilize the below chat history as additional context:" +
    JSON.stringify(messages);

  const results = await vectorStore.similaritySearch(input, 5);

  const chat = new ChatOpenAI({
    temperature: 0.8,
    openAIApiKey: openAIApiKey,
  });

  const semanticSearchContext = `These results are from a Samuel morgans CV :"${results}"`;

  const response = await chat.call([
    new SystemChatMessage(promptInjection),
    new SystemChatMessage(semanticSearchContext),
    new HumanChatMessage(input),
    new SystemChatMessage(
      truncate(
        appendHistory,
        3500 -
          promptInjection.split(" ").length -
          input.split(" ").length -
          semanticSearchContext.split(" ").length
      )
    ),
  ]);

  res.status(200).json({ result: response.text, context: results });
}
