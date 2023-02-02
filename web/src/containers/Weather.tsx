import { ConnectButton } from '@rainbow-me/rainbowkit'
import React, { useEffect, useState } from 'react'
import { useAsync } from '../hooks'
import { weather as weatherApi, geolocation, dallE2 } from '../services'


const Weater = () => {
	const [locationData, setlocationData] = useState<GeolocationPosition>()

	const {
		isLoading: isLoadingImg,
		error: imgError,
		data: imgUrl,
		executeCall: getGeneratedImage
	} = useAsync<string>(dallE2.generateImage)

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

	useEffect(() => {
		if (data) {
			getGeneratedImage(`${data.location.name} with ${data.condition.text} weather at ${data.location.localtime}`)
		}
	}, [data])

	const handleClick = async () => {

		if (!data && locationData) {
			await getWeather(locationData.coords)
		}
	}
	const loaders = isLoadingLocation || isLoading
	// TODO split containers
	return (
		<>
			<ConnectButton accountStatus="address" chainStatus="icon" showBalance={true} />
			<button disabled={loaders} className="btn btn-info m-4" onClick={handleClick}>
				{loaders ? "Loading..." : "Mint"}
			</button>

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
			{isLoadingImg && <p>Loading...</p>}
			{imgUrl && <img src={imgUrl} />}
			{locationError && <p>error_l: {locationError}</p>}
			{error && <p>error: {error}</p>}
		</>
	)
}

export default Weater