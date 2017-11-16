import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => 1.8 * (weather.main.temp - 273) + 32);
    const pressures = cityData.list.map(weather => weather.main.pressure / 33.8639);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    console.log(name, pressures);
    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lng={lon} /></td>
        <td><Chart data={temps} color="orange" units="&deg;F" /></td>
        <td><Chart data={pressures} color="green" units="in" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);