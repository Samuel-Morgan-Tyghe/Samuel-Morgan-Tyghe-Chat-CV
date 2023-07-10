// pages/api/chat.js
import { PineconeClient } from "@pinecone-database/pinecone";
import { VectorDBQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

const openAIApiKey = process.env.OPENAIKEY;

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: openAIApiKey,
});

const model = new OpenAI({
  openAIApiKey: openAIApiKey,
  // modelName: "text-embedding-ada-002",
});
export default async function handler(req, res) {
  const client = new PineconeClient();
  await client.init({
    apiKey: "52be664a-a555-4a86-8d6f-6ec9d666c7be",
    environment: "asia-southeast1-gcp-free",
  });
  const pineconeIndex = client.Index("chat-cv");

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
  });

  // Create the vector DBQA chain
  const chain = VectorDBQAChain.fromLLM(model, vectorStore, {
    k: 5,
    returnSourceDocuments: true,
  });
  const { input, promptInjection } = req.body;

  let response = await chain.call({
    query: input,
  });

  res
    .status(200)
    .json({ result: response.text, context: response.sourceDocuments });
}
