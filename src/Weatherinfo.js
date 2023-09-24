import React from "react";
import Currentdate from "./Currentdate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <h1 className="mt-4">{props.info.city}</h1>
      <p>
        Last updated: <Currentdate date={props.info.date} />
      </p>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <span className="float-left">
              <WeatherIcon code={props.info.icon} />
            </span>
            <span className="float-left">
              <WeatherTemperature celsius={props.info.temperature} />
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul className="list-unstyled">
            <li>Pressure: {props.info.pressure} MPa</li>
            <li>Humidity: {props.info.humidity} %</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
