

export const getLocation = async (): Promise<GeolocationPosition | null> => {
	let location: GeolocationPosition | null = null;

	const successHandler = (pos: GeolocationPosition) => location = pos
	const errorHandler = (err: GeolocationPositionError) => { throw new Error(JSON.stringify(err)) };

	if (!navigator.geolocation) throw new Error("Geolocation not supported");

	const result = await navigator.permissions.query({ name: "geolocation" })
	if (result.state === "denied") throw new Error("Geolocation permission not granted");

	if (result.state === "granted") {
		navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
		if (location) {
			return location
		} else {
			throw new Error("Couldn't get granted location");
		}
	}
	return null
}