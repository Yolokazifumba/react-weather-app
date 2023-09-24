import React from "react";
import Currentdate from "./Currentdate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon"

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
            <div className="float-left">
              <WeatherIcon code={props.info.icon} />
              <span className="temperarature">
                {props.info.temperature}
                <span className="units">°C</span>
              </span>
            </div>
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
