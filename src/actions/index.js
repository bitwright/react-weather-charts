import axios from 'axios';

const API_KEY = '3ec16250f3ed5ea2d5493a44d1e4564f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const req = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: req
  }
}