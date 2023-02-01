import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
	apiKey: "process.env.OPENAI_API_KEY",
});
export const openai = new OpenAIApi(configuration);
export const generateImage = async (prompt: string) => await openai.createCompletion({
	model: "text-davinci-003",
	prompt,
	temperature: 0,
	max_tokens: 7,
});
// TODO return types
