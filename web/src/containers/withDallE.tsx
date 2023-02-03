import { ComponentType, useEffect } from "react";
import { Loader, Error } from "../components";
import { useAsync } from "../hooks";
import { dallE2 } from "../services";

export const withDallE = <T,>(Child: ComponentType<T>) => (props: T | any) => {
	const { isLoading, error, data, executeCall } = useAsync<string>(dallE2.generateImage)

	const { weatherData } = props
	useEffect(() => {
		if (weatherData) {
			executeCall(`${weatherData.location.name} with ${weatherData.condition.text} weather at ${weatherData.location.localtime}`)
		}
	}, [weatherData])

	return (
		<>
			{error && <Error msg={error} />}
			{isLoading && <Loader />}
			{data && <>
				<img src={data} />
				<Child {...props} imgUrl={data} />
			</>
			}
		</>
	)
}