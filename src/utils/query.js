import { useStore } from "../composables/useStore";
import { ref } from 'vue';

const {
  propertyName,
  location,
  perks,
  category,
  propertyType,
  gender,
  ageRange,
  objective,
  tone,
  output,
  travelParty,
} = useStore().appState;

const DEFAULT_PARAMS = {
  "model": "text-davinci-003",
  "temperature": 0.7,
  "max_tokens": 2048,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0,
};

const prompt = ref(`I want you to act as a ${propertyType} hotel marketer.\
You will create a campaign to promote the product\
You will create ${output} whose main aim is to promote ${objective} in a ${tone} tone\
You will not mention any specifications not specified\
My first request: "Product: ${propertyName}, a ${category} hotel in ${location}.\
The Hotel offers ${perks}.\
Target audience: ${gender} aged ${ageRange} travelling in ${travelParty}`);

export async function query() {
  const params_ = { ...DEFAULT_PARAMS, ...{ prompt: prompt.value } };
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
