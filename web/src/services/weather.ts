type params = {
	latitude: number;
	longitude: number;
}
export const getWeather = async (location: params) => {
	const { latitude, longitude } = location;
	const queryParam = `q=${latitude},${longitude}`
	// TODO return type
	return { location }
}