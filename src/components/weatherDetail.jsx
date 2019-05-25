import React, { Component } from "react";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
class WeatherDetail extends Component {
  constructor(props) {
    super(props);
    this.city = props.city;
    this.day = props.day;
    this.state = {};
  }
  componentDidMount() {
    let apiData =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      this.city +
      "&appid=" +
      API_KEY;
    // "/" +
    // latitude +
    // "," +
    // longitude;

    let storeApiData = {};
    fetch(apiData)
      .then(response => response.json())
      .then(data => {
        storeApiData.temp = data.list[this.day].main.temp;
        storeApiData.name = data.city.name;
        storeApiData.description = data.list[this.day].weather[0].description;
        storeApiData.date = data.list[this.day].dt_txt.substring(0, 10);

        this.setState(storeApiData);
        console.log(storeApiData);
      });

    fetch(apiData)
      .then(response => response.json())
      .then(data => console.log(data));
  }
  render() {
    const { name } = this.state;
    const { temp } = this.state;
    const { description } = this.state;
    const { date } = this.state;
    //const { main } = this.state;
    console.log(this.state.main);
    // const { description } = this.state.main;
    return (
      <div>
        <div>
          <h2>Hello Weather Detail</h2>
          <h2>Location: {name}</h2>
          <h2>Temperature: {Math.round(temp - 273.15)}</h2>
          <h2>Description: {description}</h2>
          <h2>Time: {date}</h2>
        </div>
      </div>
    );
  }
}

export default WeatherDetail;
