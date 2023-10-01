import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";
import axios from "axios";
import "./WeatherForecast.css";


export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState("");
  let [forecastHourly, setForecastHourly] = useState("")

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setForecastHourly(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weather-forecast">
       
        <div className="row">
          {forecastData.map(function (dailyforecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay forecast={dailyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "caa883a4a60d93878755b08a933f74ea";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "loading";
  }
}
