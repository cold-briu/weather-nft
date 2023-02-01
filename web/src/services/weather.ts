import Axios from "axios";
import { isConditionalExpression } from "typescript";
import { config } from "../config";

const api = Axios.create({
	baseURL: config.weather.baseUrl,

})

type params = {
	latitude: number;
	longitude: number;
}
export const getWeather = async (location: params) => {
	const { latitude, longitude } = location;
	let res = await api.get(`/current.json`, {
		params: {
			KEY: config.weather.key,
			q: `${latitude},${longitude}`
		}
	})

	// TODO return type
	return { condition: res.data.current.condition, location: res.data.location }
}