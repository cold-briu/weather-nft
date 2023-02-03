type props = {
	icon: string;
	text: string;
	name: string;
	localtime: string;
}
const WeatherCard = ({ icon, text, name, localtime }: props) => {
	return (
		<>
			<p>Your weather:</p>
			<div className="card">
				<img className="card-img-top w-50" src={icon} />

				<div className="card-body">
					<h4 className='card-title'>{text}</h4>
					<p className="card-text">
						<span>{name} - {localtime}</span>
					</p>
				</div>
			</div>
		</>
	)
}

export default WeatherCard