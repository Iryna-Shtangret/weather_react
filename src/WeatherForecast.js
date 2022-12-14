import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="dayForecast">Thu</div>
          <WeatherIcon location_icon="01d" size={35} />
          <div className="ForecastTemp">
            <span className="ForecastTemp_max">32°</span>
            <span className="ForecastTemp_min">25°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
