import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "05d": "RAIN",
    "05n": "RAIN",
    "06d": "RAIN",
    "06n": "RAIN",
    "07d": "RAIN",
    "07n": "RAIN",
    "08d": "RAIN",
    "08n": "RAIN",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "SNOW",
    "10n": "SNOW",
    "11d": "FOG",
    "11n": "FOG",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="blue"
      size={props.size}
      animate={true}
    />
  );
}
