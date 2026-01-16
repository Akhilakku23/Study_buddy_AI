import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";
import OpenAI from "openai";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// console.log("API key is set:", process.env.OPENAI_API_KEY);
// console.log("OpenAI client initialized:", !!client); 


// const client2 = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const response = await client2.responses.create({
//     model: "gpt-5-mini",
//     input: "Write a one-sentence bedtime story about a unicorn."
// });

// console.log(response.output_text);


// const response = await client.chat.completions.create({
//       model: "gpt-5-nano",
//       messages: [
//         {
//           role: "user",
//           content: "Write a one-sentence bedtime story about a unicorn."
//         }
//       ]
//     });
//     console.log(response.choices[0].message.content);

app.use("/chat", chatRoute);

app.listen(5000, () => {
  console.log("Study Buddy awake on port 5000 locally at http://localhost:5000");
});
