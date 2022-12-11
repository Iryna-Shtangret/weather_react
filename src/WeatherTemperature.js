import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function unitFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function unitCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C | °
          <a href="/" onClick={unitFahrenheit}>
            F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          °
          <a href="/" onClick={unitCelsius}>
            C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
