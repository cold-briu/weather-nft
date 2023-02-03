import React, { ComponentType, useEffect, useState } from 'react'
import { useAsync } from '../hooks'
import { geolocation } from '../services'



const withLocation = <T,>(Child: ComponentType<T>) => {

	return (props: T) => {
		const [locationData, setlocationData] = useState<GeolocationPosition>()
		const { data, executeCall } = useAsync<GeolocationPosition>(geolocation.getLocation)

		useEffect(() => {
			if (!data) {
				executeCall(setlocationData)
			}
		}, [data])

		return (
			<>
				{
					locationData && <Child {...props} locationData />
				}
			</>
		)
	}



}

export default withLocation