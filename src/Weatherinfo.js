import React from "react";
import Currentdate from "./Currentdate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weatherinfo(props) {
  return (
    <div className="weather-info">
      <h1 className="mt-4">{props.info.city}</h1>
      <p>
        Last updated: <Currentdate date={props.info.date} />
      </p>
      <div className="d-flex">
        <div className="icon">
          <WeatherIcon code={props.info.icon} size={45} />
        </div>
        <div className="temperature">
          <WeatherTemperature celsius={props.info.temperature} />
        </div>
        <div className="description">{props.info.description}</div>
      </div>
    </div>
  );
}
