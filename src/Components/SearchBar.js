import React from "react";

export default props => {
  return (
    <div>
      <form onSubmit={props.loadWeather}>
        <input name="city" type="text" />
        <button>Show Weather</button>
      </form>
    </div>
  );
};
