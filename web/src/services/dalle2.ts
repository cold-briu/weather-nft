import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
	apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export const generateImage = async (prompt: string) => {
	const openai = new OpenAIApi(configuration);

	let result = await openai.createImage({
		prompt: prompt,
		n: 1,
		size: "256x256",
	});
	return result.data.data[0].url;
	// TODO return types
}