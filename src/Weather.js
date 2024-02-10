import React, { useState } from "react";
import CurrentWeatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";
import DetailedWeatherInfo from "./DetailedWeatherInfo";

export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherdata({
      maxtemp: Math.round(response.data.main.temp_max),
      mintemp: Math.round(response.data.main.temp_min),
      feelslike: Math.round(response.data.main.feels_like),
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: Math.round(response.data.main.pressure),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "4d1bfff5e3f1bce3bdad6b14467347e2";
    let apiUrl = `https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherdata.ready) {
    return (
      <div className="weather-app mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              />
            </div>
          </div>
        </form>
        <CurrentWeatherinfo info={weatherdata} />
        <WeatherForecast coordinates={weatherdata.coordinates} />
        <div>
          <DetailedWeatherInfo info={weatherdata} />
        </div>
      </div>
    );
  } else {
    search();

    return "loading....";
  }
}
