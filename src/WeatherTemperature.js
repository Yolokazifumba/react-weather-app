import React, { useState } from "react";


export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    const fahrenheit = Math.round((props.celsius * 9) / 5 + 32);
    return (
      <span>
        <span className="temperature">{fahrenheit}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}
