import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL,
});

router.post("/Madv", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question missing" });
  }

  try {
    const prompt = `Step 1: Provide a minimalistic explanation for the following question in simple terms.
  Step 2: Provide an advanced, and two detailed responce step by step with examples .
  step 3: Ensure both explanations are clear and concise.and separated clearly.which is better for learning.
  Question: ${question}`;


    // MINIMAL RESPONSE
    const minimalRes = await client.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: [
        {
          role: "system",
          content: prompt,
        },
        { role: "user", content: question },
      ],
    });

    // ADVANCED RESPONSE
    // const advancedRes = await client.chat.completions.create({
    //   model: "gpt-4.1-nano",
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "You are an expert teacher. Give an in-depth, advanced explanation with examples.",
    //     },
    //     { role: "user", content: question },
    //   ],
    // });

    res.json({
      minimal: minimalRes.choices[0].message.content,
    });
  } catch (err) {
    console.error("🔥 OPENAI ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
