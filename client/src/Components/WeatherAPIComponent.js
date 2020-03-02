// Core Imports
import React from "react";

// Material UI Imports
import Typography from "@material-ui/core/Typography";

// Component
export default function WeatherAPIComponent(props) {
  return (
    <div className={props.classes.weather}>
      <Typography variant="subtitle2">{props.title}</Typography>
      <Typography variant="h2">{props.City}</Typography>
      <img src={props.Icon} alt={props.Weather.description}></img>
      <Typography variant="h3">{Math.round(props.Temp)}&deg;C</Typography>
      <Typography variant="h5">{props.Weather.main}</Typography>
    </div>
  );
}
