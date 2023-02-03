import { ComponentType } from "react";
import { Loader } from "../components";
import Error from "../components/Error";
import { useAsync } from "../hooks";
import { weather } from "../services";

const withWeather = <T,>(Child: ComponentType<T>) => (props: T | any) => {
	const { isLoading, error, data, executeCall } = useAsync<any>(weather.getWeather)
	const handleClick = async () => {
		if (!data && props.locationData) {
			await executeCall(props.locationData.coords)
		}
	}
	console.log("w weather");

	return (
		<>
			<button disabled={isLoading} className="btn btn-info m-1" onClick={handleClick}>
				{isLoading ? "Loading..." : "Mint"}
			</button>
			{error && <Error msg={error} />}
			{isLoading && <Loader />}
			{data &&
				<>
					<p>Your weather:</p>
					<div className="card">
						<img className="card-img-top w-50" src={data.condition.icon} />

						<div className="card-body">
							<h4 className='card-title'>{data.condition.text}</h4>
							<p className="card-text">
								<span>{data.location.name} - {data.location.localtime}</span>
							</p>
						</div>
					</div>
					<Child {...props} weatherData={data} />
				</>
			}
		</>
	)
}

export default withWeather