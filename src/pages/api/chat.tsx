// // pages/api/chat.js
// import { PineconeClient } from "@pinecone-database/pinecone";
// import { ChatOpenAI } from "langchain/chat_models/openai";
// import { OpenAIEmbeddings } from "langchain/embeddings/openai";
// import { HumanChatMessage, SystemChatMessage } from "langchain/schema";
// import { PineconeStore } from "langchain/vectorstores/pinecone";

// const openAIApiKey = process.env.OPENAIKEY;
// const pineConeApiKey = process.env.PINEKEY;

// const embeddings = new OpenAIEmbeddings({
//   openAIApiKey: openAIApiKey,
// });

// function truncate(str, no_words) {
//   return str.split(" ").splice(0, no_words).join(" ");
// }
// const client = new PineconeClient();
// client.init({
//   apiKey: pineConeApiKey,
//   environment: "asia-southeast1-gcp-free",
// });
// const pineconeIndex = client.Index("chat-cv");


// export default async function handler(req, res) {

//   const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
//     pineconeIndex,
//   });
//   try {

//     const { input, promptInjection, appendHistory } = req.body;

  

//     const results = await vectorStore.similaritySearch(input, 10);

//     const chat = new ChatOpenAI({
//       modelName: "gpt-4",
//       temperature: 0.8,
//       openAIApiKey: openAIApiKey,
//     });

//     const semanticSearchContext = `These results are from a Samuel morgans CV strictly only use this data to answer any questions :"${JSON.stringify(
//       results
//     )}"`;

//     const response = await chat.call([
//       new SystemChatMessage(promptInjection + semanticSearchContext),
//       new HumanChatMessage("questions : " + input),
//       new SystemChatMessage(
//         truncate(
//           appendHistory,
//           3500 -
//             promptInjection.split(" ").length -
//             input.split(" ").length -
//             semanticSearchContext.split(" ").length
//         )
//       ),
//     ]);

//     res.status(200).json({ result: response.text, context: results });
//   } catch (error) {
//     console.error(error);
//     res.status(502).json({ error: 'Server error' });
//   }
// }
