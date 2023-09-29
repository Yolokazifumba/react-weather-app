import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecast.temp.min);
    return `${temperature}`;
  }

  function day() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    console.log({ props });
    return days[day];
  }

  return (
    <div className="forecastDay">
      <div className="weatherforecast-day">{day()}</div>
      <WeatherIcon code={props.forecast.weather[0].icon} size={20} />{" "}
      <div className="weatherforecast-temperature">
        <span className="weatherforecast-temperature-max">
          {maxTemperature()}
        </span>{" "}
        <span className="weatherforecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
