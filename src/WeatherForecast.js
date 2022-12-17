import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  const apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
