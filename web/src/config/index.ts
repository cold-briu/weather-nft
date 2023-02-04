const safeConfig = (val?: string) => {
	console.warn("missing key for confg");
	return val ?? "NO_KEY"
}

export const config = {
	weather: {
		baseUrl: "https://api.weatherapi.com/v1",
		key: safeConfig(process.env.REACT_APP_WEATHER_API_KEY)
	},
	rainbowkit: {
		key: safeConfig(process.env.REACT_APP_ALCHEMY_ID)
	},
	openai: {
		key: safeConfig(process.env.REACT_APP_OPENAI_API_KEY)
	},
	ipfs: {
		url: "https://ipfs.infura.io:5001/api/v0"
	},
	infrura: {
		id: safeConfig(process.env.REACT_APP_INFRURA_ID),
		key: safeConfig(process.env.REACT_APP_INFRURA_KEY),
		url: safeConfig(process.env.REACT_APP_INFRURA_URL),
	},
	alchemy: {
		key: safeConfig(process.env.REACT_APP_ALCHEMY_KEY),
		contractAddress: safeConfig(process.env.REACT_APP_ADDRESS)
	}

}