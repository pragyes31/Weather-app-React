import React from "react";

export default props => {
  return (
    <div>
      <form onSubmit={props.loadWeather}>
        <input type="text" />
        <button>Show Weather</button>
      </form>
    </div>
  );
};
