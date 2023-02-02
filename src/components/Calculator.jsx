import React from "react";
import { convert, toCelsius, toFahrenhite } from "../lib/converter";
import TemperatureInput from "./TemperatureInput"
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleChange = (e, scale) => {
    this.setState({
        temperature: e.target.value,
        scale
    });
  };
  render() {
    const { temperature, scale } = this.state;

      const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
      const fahrenhite = scale === 'c' ? convert(temperature, toFahrenhite) : temperature
    return (
      <div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleChange } />,
        <br />
            <TemperatureInput scale="f" temperature={fahrenhite} onTemperatureChange={this.handleChange} />
            <br />

            <BoilingVerdict celsius={parseFloat(temperature)}/>
          
      </div>
    );
  }
}
