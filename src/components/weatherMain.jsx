import React, { Component } from "react";
import WeatherComponent from "../components/weatherComponent";
import WeatherDetail from "../components/weatherDetail";
class WeatherMain extends Component {
  constructor(props) {
    super(props);
    this.state = { details: false };
  }
  changePage(bool) {
    this.setState({ details: bool });
  }
  mainPage() {
    if (this.state.details === true) return <WeatherComponent city="London" />;
    else {
      return [1, 2, 3, 4, 5].map(o => <WeatherDetail city="London" day={o} />);
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.changePage(true)}>Page Main</button>
        <button onClick={() => this.changePage(false)}>Page DEscript</button>

        <h1>Hello Weather Main</h1>
        {this.mainPage()}
      </div>
    );
  }
}

export default WeatherMain;
