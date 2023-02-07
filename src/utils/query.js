import { appState } from "../composables/UseStore";

const DEFAULT_PARAMS = {
  "model": "text-davinci-003",
  "temperature": 0.7,
  "max_tokens": 2048,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
};


export async function query() {
  console.log(appState.propertyName);
  const prompt = `I want you to act as a ${appState.propertyType} hotel marketer. \
    You will create a campaign to promote the product. \
    You will create 3 of each: ${appState.output}, whose main aim is to promote ${appState.objective} in a ${appState.tone} tone. \
    You will not mention any aspects of the product not specified. \
    My first request: "Product: ${appState.propertyName}, a ${appState.category} hotel in ${appState.location}. \
    The Hotel offers ${appState.perks}. \
    Target audience: ${appState.gender} aged ${appState.ageRange} travelling in ${appState.travelParty}.`;

  const params_ = { ...DEFAULT_PARAMS, ...{ prompt } };
  appState.prompt = prompt;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(import.meta.env.VITE_OPENAI_API_KEY)
    },
    body: JSON.stringify(params_),
  };
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  const data = await response.json();
  return data.choices[0].text;
}
