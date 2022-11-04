import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-001",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
    max_tokens:500
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(question) {
  //const capitalizedAnimal =
    //animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `${question}`;
}
