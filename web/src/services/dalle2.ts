import { Configuration, OpenAIApi } from "openai";
import { config } from "../config";
const configuration = new Configuration({
	apiKey: config.openai.key,
});

export const generateImage = async (prompt: string) => {
	const openai = new OpenAIApi(configuration);

	let result = await openai.createImage({
		prompt: prompt,
		n: 1,
		size: "256x256",
		// size: "512x512",
	});

	return result.data.data[0].url;
	// TODO return types
}