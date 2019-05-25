import React, { Component } from "react";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.city = props.city;
    this.state = {};
  }
  componentDidMount() {
    let apiData =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
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
        storeApiData.temp = data.main.temp;
        storeApiData.name = data.name;
        storeApiData.description = data.weather[0].description;
        storeApiData.date =
          new Date().getDate() +
          "/" +
          new Date().getMonth() +
          "/" +
          new Date().getFullYear() +
          "  " +
          new Date().getHours() +
          ":" +
          new Date().getMinutes();
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
          <h2>Hello Weather Component</h2>
          <h2>Location: {name}</h2>
          <h2>Temperature: {Math.round(temp - 273.15)}</h2>
          <h2>Description: {description}</h2>
          <h2>Time: {date}</h2>
        </div>
      </div>
    );
  }
}

export default WeatherComponent;
