import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY",
  dangerouslyAllowBrowser: true,
});

export async function getAIRecommendation(answers) {
  const prompt = `Suggest best stream (Science, Commerce, Arts) for student with answers: ${answers.join(", ")}`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content;
}
