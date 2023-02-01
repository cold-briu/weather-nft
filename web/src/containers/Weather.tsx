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
	const { isLoading, error, data, executeCall: getWeather } = useAsync<any>(weatherApi.getWeather)

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
			<span>Your weather:</span>
			{isLoadingLocation || isLoading && <p>Loading...</p>}
			{data && <>
				{console.log(data)}
				<div className="card">
					<div className="card-header">
						<p>{data.condition.text} - {data.location.name}</p>
					</div>
					<div className="card-body">
						<img src={data.condition.icon} alt="" width="48px" />
						<span>{data.location.localtime}</span>
					</div>
				</div>
			</>}
			{locationError && <p>error_l: {locationError}</p>}
			{error && <p>error: {error}</p>}
		</>
	)
}

export default Weater