import { useEffect } from 'react'
import { ipfs } from '../services'

type props = {
	imgUrl?: string, // TODO props weather data
}

const Minter = ({ imgUrl }: props) => {


	useEffect(() => {
		if (imgUrl) {
			ipfs.addFile(imgUrl)
		}
	}, [imgUrl])

	return (
		<>
			<p>holi</p>
		</>
	)
}

export default Minter