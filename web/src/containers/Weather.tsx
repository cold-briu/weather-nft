import React, { useEffect, useState } from 'react'
import { useAsync } from '../hooks'
import { weather as weatherApi, geolocation } from '../services'


const Weater = () => {
	const [locationData, setlocationData] = useState<GeolocationPosition>()
	const {
		isLoading: isLoadingLocation,
		error: locationError,

		executeCall: getLocation
	} = useAsync<GeolocationPosition>(geolocation.getLocation)

	// TODO return type
	const { isLoading, error, data, executeCall: getWeather } = useAsync(weatherApi.getWeather)

	useEffect(() => {

		if (!locationData) {
			getLocation(setlocationData)
		}
		if (!data && locationData) {
			getWeather(locationData.coords)
		}
	}, [data, locationData])

	return (
		<>
			<span>weather container</span>
			{isLoadingLocation || isLoading && <p>Loading...</p>}
			{data && <p>data came</p>}
			{locationError && <p>error_l: {locationError}</p>}
			{error && <p>error: {error}</p>}
		</>
	)
}

export default Weater