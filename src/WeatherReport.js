import React from "react";
import "./styles.css";

class WeatherReport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Weather for {this.props.city}</div>;
  }
}

export default WeatherReport;
