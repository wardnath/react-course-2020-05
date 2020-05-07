import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Enter location for 5 day weather forecast</h2>
      <form>
        <label>
          Location
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
