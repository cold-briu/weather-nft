import React, { useEffect, useState } from 'react'
import { useAsync } from '../hooks'
import { weather as weatherApi, geolocation } from '../services'


const Wheater = () => {

	const {
		isLoading: isLoadingLocation,
		error: locationError,
		data: locationData
	} = useAsync<GeolocationPosition>(geolocation.getLocation())

	// TODO return type
	const { isLoading, error, data, executeCall: getWeather } = useAsync(weatherApi.getWeather)

	useEffect(() => {
		if (!data && locationData) {
			getWeather(locationData.coords)
		}
	}, [])

	return (
		<>
			{isLoadingLocation || isLoading && <p>Loading...</p>}
			{data && <p>data came</p>}
			{locationError && <p>error: {locationError}</p>}
			{error && <p>error: {error}</p>}
		</>
	)
}

export default Wheater