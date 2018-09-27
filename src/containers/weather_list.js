import React, { Component } from "react";
import { connect } from 'react-redux';
// import { Sparklines, SparklinesLine } from "react-sparklines";
import Chart from '../components/chart';
import GoogleMaps from'../components/google_maps';

class WeatherList extends Component {

	renderWeather(cityData){
		const name = cityData.city.name;

		const{ lon, lat }= cityData.city.coord;

		const temperatures = [288.15, 285.32, 283.49, 282.89, 283.465, 290.566, 294.232, 294.472, 290.084, 287.118, 285.049]
		const pressures = [1022.38, 1022.73, 1022.47, 1021.74, 1021.67, 1021.23, 1019.67, 1018.25, 1017.83, 1017.92, 1017.29]
		const humiditys = [65, 80, 95, 100, 68, 54, 52, 65, 74, 88]
	

		return (
			<tr key={ name }>
				<td><GoogleMaps lon={lon} lat={lat}/> </td>
				<td>
					<Chart data={temperatures} color="red" units=" Kelvin"/>
				</td>
				<td>
					<Chart data={pressures} color="blue" units=" hPa"/>
				</td>
				<td>
					<Chart data={humiditys} color="green" units=" %"/>
				</td>
			</tr>
		)
	}


	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (Kelvin)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

// ES6 syntax for the following
// function mapStateToProps(state){
//  return { weather:state.weather };
// }

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);