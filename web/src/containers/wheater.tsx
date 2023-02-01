import React, { useEffect, useState } from 'react'
import { useAsync } from '../hooks'
import { weather as weatherApi } from '../services'

// const [location, setLocation] = useState<GeolocationPosition>()
// const getLocation = async () => {
// 	let result = await navigator.permissions.query({ name: "geolocation" })
// 	if (result.state === "granted") {
// 		let locationResult = navigator.geolocation.getCurrentPosition(setLocation)
// 	}
// 	else if (result.state === "denied") {
// 		setPermissionDenied(true)
// 	}
// }

type props = {
	location: GeolocationCoordinates;
	renderer: React.Component;
}
const Wheater = ({ location: { latitude, longitude } }: React.PropsWithChildren<props>) => {
	const { isLoading, error, data, executeCall } = useAsync(
		weatherApi.getWeather(latitude, longitude)
	)

	useEffect(() => {
		if (!data) {
			executeCall()
		}
	}, [])

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{data && <p>data came</p>}
			{error && <p>error: {error}</p>}
		</>
	)
}

export default Wheater