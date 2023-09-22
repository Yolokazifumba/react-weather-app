import React, { useState } from "react";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import axios from "axios";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [weatherdata, setWeatherdata] = useState({});

  function handleResponse(response) {
    console.log(response);
    setWeatherdata({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed, 
      pressure: Math.round(response.data.main.pressure),
      date: new Date(response.data.dt*1000)  
    })
    setReady(true);
    console.log(weatherdata.date)
  };

  if (ready) {
    return (
      <div className="weather-app mt-4">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        </div>
      <Weatherinfo info = {weatherdata}/>)
  } else {
    let city = "london";
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading....";
  }

}