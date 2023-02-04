import { ComponentType, useEffect } from "react";
import { Error, Loader, WeatherCard } from "../components";
import { useAsync } from "../hooks";
import { weather } from "../services";

const withWeather = <T,>(Child: ComponentType<T>) => (props: T | any) => {
	const { isLoading, error, data, executeCall, reset } = useAsync<any>(weather.getWeather)

	useEffect(() => {
		if (!data && props.locationData) {
			executeCall(props.locationData.coords)
		}
	}, [data])


	return (
		<>
			<div className="mt-3 mb-3">
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
						<Child {...props} weatherData={data} resetWeather={reset} />
					</>
				}
			</div>
		</>
	)
}

export default withWeather