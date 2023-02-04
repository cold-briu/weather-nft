import { useEffect, useState } from 'react'
import { Loader } from '../components'
import { useAsync } from '../hooks'
import { ethereum, ipfs } from '../services'

type props = {
	imgUrl: string, // TODO props weather data
}

const Minter = ({ imgUrl }: props) => {
	const {
		isLoading,
		executeCall: mint
	} = useAsync(async () => {

		let { outputUrl, file } = await ipfs.addFile(imgUrl)
		let res = await ethereum.mint(outputUrl)
		storeImage(window.URL.createObjectURL(new Blob([file])))
		console.log(res);
	})

	const storeImage = async (url: string) => {
		const link = document.createElement("a");
		link.style.display = "none";
		link.href = url;
		link.setAttribute("download", `${imgUrl}.png`); //or any other extension
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	const handleClick = () => {
		mint()
	}

	return (
		<>
			<div className="card bg-dark text-white" onClick={handleClick}>
				<img className="card-img" src={imgUrl} alt="Card image" />
				<div className="card-img-overlay">
					<h5 className="card-title">Mint!</h5>
					<p className="card-text">Press this image to mint it as an nft in arbitrum network</p>
					<p className="card-text">Then it will be downloaded to your device</p>
				</div>
			</div>
			{isLoading && <Loader />}
		</>
	)
}

export default Minter