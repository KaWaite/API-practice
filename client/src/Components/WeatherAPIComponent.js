import React, { useState, useEffect } from "react";

export default function WeatherAPIComponent(props) {
  // fetch data from api/express
  useEffect(() => {
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // *********** OWM API call for current weather info**********
  const [City, setCity] = useState();
  const [Weather, setWeather] = useState({});
  const [Temp, setTemp] = useState({});
  const [Icon, setIcon] = useState();

  const fetchWeatherData = async () => {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=fd41f9c5f443147155fff01a2ba29766`
    );
    const items = await data.json();

    const weather = items.weather[0];
    const weatherIcon =
      "http://openweathermap.org/img/wn/" + weather.icon + "@2x.png";
    const temperature = items.main;
    setCity(items.name);
    setWeather(weather);
    setIcon(weatherIcon);
    setTemp(temperature);
  };
  // ********************************************************

  return (
    <div className={props.classes.weather}>
      <h4>{props.title}</h4>
      <h1>{City}</h1>
      <img src={Icon} alt={Weather.description}></img>
      <h4>{Temp.temp} Celsius</h4>
      <h2>{Weather.description}</h2>
    </div>
  );
}
