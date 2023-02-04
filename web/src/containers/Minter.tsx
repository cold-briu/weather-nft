import { useEffect } from 'react'
import { useAsync } from '../hooks'
import { ethereum, ipfs } from '../services'

type props = {
	imgUrl: string, // TODO props weather data
}

const Minter = ({ imgUrl }: props) => {
	const {
		isLoading,
		error,
		data,
		executeCall: mint
	} = useAsync(async () => {

		let ipfsOutputUrl = await ipfs.addFile(imgUrl)
		let res = await ethereum.mint(ipfsOutputUrl)
		console.log(res);

	})

	const handleClick = async () => {
		mint()
	}

	return (
		<>
			<button disabled={isLoading} className="btn btn-info m-1" onClick={handleClick}>
				{isLoading ? "Loading..." : "Mint"}
			</button>
			<p>holi</p>
		</>
	)
}

export default Minter