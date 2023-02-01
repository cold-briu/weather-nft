

export const getLocation = async (successHandler: (pos: GeolocationPosition) => void): Promise<GeolocationPosition | null> => {
	let location: GeolocationPosition | null = null;


	const errorHandler = (err: GeolocationPositionError) => { throw new Error(JSON.stringify(err)) };
	if (!navigator.geolocation) throw new Error("Geolocation not supported");


	navigator.geolocation.getCurrentPosition(successHandler, errorHandler)

	console.log(location);
	if (location) {
		console.log(location);
		return location
	} else {
		throw new Error("Couldn't get granted location");
	}
}