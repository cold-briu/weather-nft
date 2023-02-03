import { ConnectButton } from '@rainbow-me/rainbowkit'
import React, { useEffect, useState } from 'react'
import { useAsync } from '../hooks'
import { weather as weatherApi, dallE2, ipfs } from '../services'


type props = {
	locationData?: GeolocationPosition,
}


const Weater = ({ locationData }: React.PropsWithChildren<props>) => {


	const {
		isLoading,
		error: weatherError,
		data: weatherData,
		executeCall: getWeather
	} = useAsync<any>(weatherApi.getWeather)




	const {
		isLoading: isLoadingImg,
		error: imgError,
		data: imgUrl,
		executeCall: getGeneratedImage
	} = useAsync<string>(dallE2.generateImage)




	useEffect(() => {
		if (weatherData) {
			getGeneratedImage(`${weatherData.location.name} with ${weatherData.condition.text} weather at ${weatherData.location.localtime}`)
		}
	}, [weatherData])

	useEffect(() => {
		if (imgUrl) {
			let output = ipfs.addFile(imgUrl)
			console.log(output);

		}
	}, [imgUrl])

	const handleClick = async () => {
		if (!weatherData && locationData) {
			await getWeather(locationData.coords)
		}
	}

	const loaders = isLoading
	const errors = weatherError || imgError
	// TODO split containers
	return (
		<>
			<ConnectButton accountStatus="address" chainStatus="icon" showBalance={true} />
			<button disabled={loaders} className="btn btn-info m-4" onClick={handleClick}>
				{loaders ? "Loading..." : "Mint"}
			</button>

			{weatherData && <>
				<span>Your weather:</span>
				<div className="card">
					<img className="card-img-top w-50" src={weatherData.condition.icon} />

					<div className="card-body">
						<h4 className='card-title'>{weatherData.condition.text}</h4>
						<p className="card-text">
							<span>{weatherData.location.name} - {weatherData.location.localtime}</span>

						</p>
					</div>
				</div>
			</>}
			{isLoadingImg && <p>Loading...</p>}
			{imgUrl && <img src={imgUrl} />}
			{errors && <p>error: {errors}</p>}
		</>
	)
}

export default Weater