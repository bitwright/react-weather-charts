import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h3>Weather Forecast (5 day)</h3>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
