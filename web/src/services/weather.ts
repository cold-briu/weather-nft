import Axios from "axios";
import { isConditionalExpression } from "typescript";
import { config } from "../config";

const api = Axios.create({
	baseURL: config.weather.baseUrl,
	params: {
		KEY: config.weather.key
	}
})

type params = {
	latitude: number;
	longitude: number;
}
export const getWeather = async (location: params) => {
	const { latitude, longitude } = location;
	let res = await api.get(`/current`, {
		params: {
			q: `${latitude},${longitude}`
		}
	})
	console.log(res);

	// TODO return type
	return res.data.condition
}