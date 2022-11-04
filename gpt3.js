const openailib = require("openai");

require('dotenv').config()
//console.log(process.env)

Configuration = openailib.Configuration
OpenAIApi = openailib.OpenAIApi

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.runQuery = async function (qry="what is agriculture") {
  const completion = await openai.createCompletion({
    model: "text-davinci-001",
    prompt: generatePrompt(qry),
    temperature: 0.6,
    max_tokens:500
  })

  return completion.data.choices[0].text
}

function generatePrompt(question) {
  //const capitalizedAnimal =
    //animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `${question}`;
}


