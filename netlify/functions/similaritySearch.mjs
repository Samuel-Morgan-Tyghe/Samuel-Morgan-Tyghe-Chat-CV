import { PineconeClient } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";

export const handler = async (req, res) => {
  const openAIApiKey = process.env.OPENAIKEY;
  const pineConeApiKey = process.env.PINEKEY;

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: openAIApiKey,
  });

  const client = new PineconeClient();
  await client.init({
    apiKey: pineConeApiKey,
    environment: "asia-southeast1-gcp-free",
  });

  const pineconeIndex = client.Index("chat-cv");

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
  });

  const { input, retryNumber } = JSON.parse(req.body);
  console.log("🚀 ~ file: similaritySearch.js:26 ~ input:", input);

  let results = [];
  try {
    results = await vectorStore.similaritySearch(input, retryNumber);
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return { statusCode: 500, body: error };
  }

  return { statusCode: 200, body: JSON.stringify({ context: results }) };
};
