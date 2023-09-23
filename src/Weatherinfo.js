import React from "react";
import Currentdate from "./Currentdate";

export default function Weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <div className="row">
        <h1 className="mt-4">{props.info.city}</h1>
        <p>
          Last updated: <Currentdate date={props.info.date} />
        </p>
        <div className="col-6 d-flex">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="weather condition"
            width="80px"
          />
          <h2>{props.info.temperature}°C</h2>
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
