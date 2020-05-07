import React from "react";
import WeatherReport from "/src/WeatherReport";
import "./styles.css";

function SelectWeather(props) {
  let { city, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input type="text" value={city} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      showWeather: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ showWeather: true });
    alert("A name was submitted: " + this.state.city);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <h2>Enter location for 5 day weather forecast</h2>
        {this.state.showWeather ? (
          <WeatherReport city={this.state.city} />
        ) : (
          <SelectWeather
            city={this.state.city}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

export default App;
