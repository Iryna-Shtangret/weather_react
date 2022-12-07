import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather selectedCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://sparkling-smakager-db96da.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Iryna Mrachkovska
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Iryna-Shtangret/weather_react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
