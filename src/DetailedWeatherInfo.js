import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


import "./Weather.css";

export default function DetailedWeatherInfo(props){
    return (
      <div className="Detailed-Weather-Info mt-5">
        <p className="text-decoration-underline">Weather Details</p>

        <div className="d-flex mt-4 text-center">
          <div className="detailed-temperature me-5">
            <FontAwesomeIcon icon="fa-solid fa-temperature-high" />
            <div>Maximum Temp</div>
            <div> {props.info.maxtemp} °C</div>
          </div>

          <div className="detailed-temperature me-5">
            <FontAwesomeIcon icon="fa-solid fa-temperature-low" />
            <div>Minimum Temp</div>
            <div> {props.info.mintemp} °C</div>
          </div>

          <div className="detailed-conditions me-5">
            <FontAwesomeIcon icon="fa-solid fa-temperature-three-quarters" />

            <div>Feels like</div>
            <div> {props.info.feelslike} °C</div>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-4 text-center">
          <div className="detailed-conditions me-5">
            <FontAwesomeIcon icon="fa-solid fa-droplet" />

            <div>Humidity </div>
            <div> {props.info.humidity} %</div>
          </div>

          <div className="detailed-conditions-wind me-5  ">
            <div>
              <FontAwesomeIcon icon="fa-solid fa-wind" />
            </div>
            <div>Wind</div>
            <div> {props.info.wind}km/h</div>
          </div>

          <div className="detailed-conditions me-5 ">
            <div className="d-flex flex-column">
              <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
              <FontAwesomeIcon icon="fa-solid fa-wind" />
            </div>
            <div>Pressure</div> <div>{props.info.pressure} MPa</div>
          </div>
        </div>
      </div>
    );
}
library.add(fab, fas, far);