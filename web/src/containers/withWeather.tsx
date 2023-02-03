import { ComponentType } from "react";
import { Error, Loader, WeatherCard } from "../components";
import { useAsync } from "../hooks";
import { weather } from "../services";

const withWeather = <T,>(Child: ComponentType<T>) => (props: T | any) => {
	const { isLoading, error, data, executeCall } = useAsync<any>(weather.getWeather)

	const handleClick = async () => {
		if (!data && props.locationData) {
			await executeCall(props.locationData.coords)
		}
	}

	return (
		<>
			<button disabled={isLoading} className="btn btn-info m-1" onClick={handleClick}>
				{isLoading ? "Loading..." : "Mint"}
			</button>
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