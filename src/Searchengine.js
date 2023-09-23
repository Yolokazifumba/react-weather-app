import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";
import "./Weather.css";

export default function Searchengine(props) {
  let [weatherdata, setWeatherdata] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    console.log(response);
    console.log(new Date(response.data.dt * 1000));
    setWeatherdata({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: Math.round(response.data.main.pressure),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventdefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherdata.ready) {
    return (
      <div className="weather-app mt-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Weatherinfo info={weatherdata} />
      </div>
    );
  } else {
    search();

    return "loading....";
  }
}
