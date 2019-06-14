import React from "react";
import tempConverter from "../util/tempConverter";

export default props => {
  return (
    <div className="weather-info">
      {props.city === undefined ? (
        "Search Weather in your favorite city"
      ) : (
        <div>
          <h3>
            Weather in {props.city}, {props.country} is :
          </h3>
          <img
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt="weather icon"
          />
          <h3>{tempConverter(props.temperature)} &deg;C</h3>
        </div>
      )}
    </div>
  );
};

// Weather in {props.city}, {props.country} is {props.temperature}
