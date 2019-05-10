import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./Components/SearchBar";
import ShowWeather from "./Components/ShowWeather";

import "./styles.css";

function App() {
  return (
    <div>
      <SearchBar />
      <ShowWeather />
    </div>
  );
}

// let weatherUrl =
//   "http://api.openweathermap.org/data/2.5/weather?q=jabalpur&APPID=966604145f9141f0872bbd24cea3a1f2";

// fetch(weatherUrl)
//   .then(response => response.json())
//   .then(data => console.log(data));

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
