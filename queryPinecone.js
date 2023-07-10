import { PineconeClient } from "@pinecone-database/pinecone";
import { VectorDBQAChain } from "langchain/chains";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";

const openAIApiKey = "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";

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: openAIApiKey,
});

const model = new OpenAI({
  openAIApiKey: openAIApiKey,
  // modelName: "text-embedding-ada-002",
});

async function main() {
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
    returnSourceDocuments: false,
  });

  // Define a function to handle the chatbot conversation
  async function chatbot() {
    let response = await chain.call({
      query: "list some of sams challenges?",
    });
    console.log(
      "🚀 ~ file: queryPinecone.js:44 ~ chatbot ~ response:",
      response
    );
  }

  // Start the chatbot conversation
  chatbot();
}

main().catch((error) => {
  console.error(error);
});
