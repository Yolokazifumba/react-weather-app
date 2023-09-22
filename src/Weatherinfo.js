import React from "react";

export default function Weatherinfo(props){
    return (
      <div className="weatherinfo">
        <div className="row">
          <h1 className="mt-4">Cape Town</h1>
          <p>Last updated: Wednesday September 20 04:26</p>
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
              <li>Pressure: {props.info.pressure}</li>
              <li>Humidity: {props.info.humidity}</li>
              <li>Wind: {props.info.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
}