import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./Components/SearchBar";
import ShowWeather from "./Components/ShowWeather";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      weather: undefined,
      icon: undefined
    };
    this.getWeather = this.getWeather.bind(this);
  }
  getWeather = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=966604145f9141f0872bbd24cea3a1f2`;

    fetch(weatherUrl)
      .then(response => response.json())
      .then(data =>
        this.setState({
          temperature: data.main.temp,
          weather: data.weather[0].description,
          icon: data.weather[0].icon
        })
      );
  };
  render() {
    return (
      <div>
        <SearchBar loadWeather={this.getWeather} />
        <ShowWeather
          temperature={this.state.temperature}
          weather={this.state.weather}
          icon={this.state.icon}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
