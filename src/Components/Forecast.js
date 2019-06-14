import React from "react";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.getForecast = this.getForecast.bind(this);
  }
  getForecast = () => {};
  render() {
    return (
      <div className="forecast">
        <button onClick={this.getForecast}>Forecast</button>
      </div>
    );
  }
}

export default Forecast;
