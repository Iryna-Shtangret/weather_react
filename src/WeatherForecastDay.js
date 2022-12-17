import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let number_day = date.getDay();
    return day[number_day];
  }

  function temp_max() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function temp_min() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="dayForecast">{day()}</div>
      <WeatherIcon location_icon={props.data.weather[0].icon} size={35} />
      <div className="ForecastTemp">
        <span className="ForecastTemp_max">{temp_max()}</span>
        <span className="ForecastTemp_min">{temp_min()}</span>
      </div>
    </div>
  );
}
