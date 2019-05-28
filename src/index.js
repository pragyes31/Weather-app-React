import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./Components/SearchBar";
import "./styles.css";
import ShowWeather from "./Components/ShowWeather";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
  }
  getWeather = e => {
    e.preventDefault();
    let weatherUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=mumbai&APPID=966604145f9141f0872bbd24cea3a1f2";

    fetch(weatherUrl)
      .then(response => response.json())
      .then(data => console.log(data));
  };
  render() {
    return (
      <div>
        <SearchBar loadWeather={this.getWeather} />
        <ShowWeather />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
