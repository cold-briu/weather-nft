import { ComponentType, useEffect, useState } from 'react'
import { Loader } from '../components'
import Error from '../components/Error'
import { useAsync } from '../hooks'
import { geolocation } from '../services'

const withLocation = <T,>(Child: ComponentType<T>) => (props: T) => {
	const [locationData, setlocationData] = useState<GeolocationPosition>()
	const { data, isLoading, error, executeCall } = useAsync<GeolocationPosition>(geolocation.getLocation)

	useEffect(() => {
		if (!data) {
			executeCall(setlocationData)
		}
	}, [data])
	console.log("w loc");

	return (
		<>
			{error && <Error msg={error} />}
			{isLoading && <Loader />}
			{locationData && <Child {...props} locationData={locationData} />}
		</>
	)
}

export default withLocation