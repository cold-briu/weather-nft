import { ComponentType, useEffect } from "react";
import { Error, Loader, WeatherCard } from "../components";
import { useAsync } from "../hooks";
import { weather } from "../services";

const withWeather = <T,>(Child: ComponentType<T>) => (props: T | any) => {
	const { isLoading, error, data, executeCall } = useAsync<any>(weather.getWeather)

	useEffect(() => {
		if (!data && props.locationData) {
			executeCall(props.locationData.coords)
		}
	}, [])


	return (
		<>
			{error && <Error msg={error} />}
			{isLoading && <Loader />}
			{data &&
				<>
					<WeatherCard
						icon={data.condition.icon}
						text={data.condition.text}
						name={data.location.name}
						localtime={data.location.localtime}
					/>
					<Child {...props} weatherData={data} />
				</>
			}
		</>
	)
}

export default withWeather