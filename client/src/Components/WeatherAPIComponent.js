import React, { useState, useEffect } from "react";

export default function WeatherAPIComponent(props) {
  // fetch data from api/express
  useEffect(() => {
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ***********external API call attempt**********
  const [Weather, setWeather] = useState({});
  const [Coord, setCoord] = useState({});

  const fetchWeatherData = async () => {
    const data = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=fd41f9c5f443147155fff01a2ba29766`
    );
    const items = await data.json();
    const coordinates = items.coord;
    setWeather(items);
    setCoord(coordinates);
  };

  // ********************************************************
  return (
    <div className={props.classes.area}>
      <h2>{props.title}</h2>
      <h3>{Weather.name}</h3>
      <h4>
        {Coord.lat} , {Coord.lon}
      </h4>
    </div>
  );
}
