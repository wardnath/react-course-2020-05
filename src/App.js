import React from "react";
import WeatherReport from "/src/WeatherReport";
import "./styles.css";

function NoWeather() {
  return <div>No weather to show...</div>;
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Location:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.showWeather ? (
          <WeatherReport city={this.state.city} />
        ) : (
          <NoWeather />
        )}
      </div>
    );
  }
}

export default App;
