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
	}, [locationData])

	const handleClick = () => {
		if (!data && locationData) {
			getWeather(locationData.coords)
		}
	}

	return (
		<>
			<button className="btn btn-info mb-4" onClick={handleClick}>
				Mint
			</button>
			{isLoadingLocation || isLoading && <p>Loading...</p>}
			{data && <>
				<span>Your weather:</span>
				<div className="card">
					<img className="card-img-top w-50" src={data.condition.icon} />

					<div className="card-body">
						<h4 className='card-title'>{data.condition.text}</h4>
						<p className="card-text">
							<span>{data.location.name} - {data.location.localtime}</span>

						</p>
					</div>
				</div>
			</>}
			{locationError && <p>error_l: {locationError}</p>}
			{error && <p>error: {error}</p>}
		</>
	)
}

export default Weater