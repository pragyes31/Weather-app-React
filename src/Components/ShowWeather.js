import React from "react";

export default props => {
  console.log(`${props.temperature}`);
  return (
    <div className="weather-info">
      <div className="city" />
      <div className="temperature">{props.temperature}</div>
      <div className="forecast" />
      <div className="description" />
      <div className="icon" />
    </div>
  );
};
