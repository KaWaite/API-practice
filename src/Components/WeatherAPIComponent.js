// Core Imports
import React, { useState, useEffect } from "react";

// Component
export default function WeatherAPIComponent(props) {
  // fetch data from api/express
  useEffect(() => {
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  // *********** OWM API call and state initialization for current weather info**********
  const [City, setCity] = useState();
  const [Weather, setWeather] = useState({});
  const [Temp, setTemp] = useState({});
  const [Icon, setIcon] = useState();

  const fetchWeatherData = async () => {
    try {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=fd41f9c5f443147155fff01a2ba29766`
      );
      if (data.ok) {
        const items = await data.json();

        const weather = items.weather[0];
        const weatherIcon =
          "http://openweathermap.org/img/wn/" + weather.icon + "@2x.png";
        const temperature = items.main.temp;
        setCity(items.name);
        setWeather(weather);
        setIcon(weatherIcon);
        setTemp(temperature);
      } else {
        alert(
          "Sorry, that is not a real city. Please try again with a city on Earth."
        );
        console.log("failed... " + data.status);
      }
    } catch (e) {
      alert(
        "Gee Whiz. Looks like there's no network access. Please make sure you're online and try again!"
      );
    }
  };
  // ********************************************************

  return (
    <div className="weather">
      <h5>{props.title}</h5>
      <h2>{City}</h2>
      <img src={Icon} alt={Weather.description}></img>
      <h3>{Math.round(Temp)}&deg;C</h3>
      <h5 className="weather-desc">{Weather.description}</h5>
    </div>
  );
}
