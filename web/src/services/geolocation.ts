

export const getLocation = async (successHandler: (pos: GeolocationPosition) => void): Promise<void> => {


	const errorHandler = (err: GeolocationPositionError) => { throw new Error(JSON.stringify(err)) };
	if (!navigator.geolocation) throw new Error("Geolocation not supported");


	navigator.geolocation.getCurrentPosition(successHandler, errorHandler)
}