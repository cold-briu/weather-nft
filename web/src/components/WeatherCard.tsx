type props = {
	icon: string;
	text: string;
	name: string;
	localtime: string;
}
const WeatherCard = ({ icon, text, name, localtime }: props) => {
	return (
		<>
			<div className="card text-dark bg-light mb-3" >
				<div className="card-header d-flex flex-row justify-content-left align-items-center">
					<span className="badge badge-light badge-pill">
						<img width="32px" src={icon} alt="Card image" />
					</span>
					<p className="ml-2">
						<strong>
							{text}
						</strong>
					</p>
				</div>
				<div className="card-body">
					<p className="card-text">{name} - {localtime}</p>
				</div>
			</div>
		</>
	)
}

export default WeatherCard