import React, { useState, useEffect } from "react";

// import ListComponent from "./ListComponent";
import WeatherAPIComponent from "./WeatherAPIComponent";

// Material ui imports
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "50px 100px",
    float: "left",
    "& > *": {
      width: 200,
      display: "block",
      margin: "35px auto"
    }
  },
  middle: {
    display: "flex",
    margin: 0,
    padding: "70px 0 0 0",
    alignItems: "center",
    justifyContent: "center"
  },
  weather: {
    padding: "20px",
    width: "300px",
    background: "#c7dade"
  },
  list: {
    listStyleType: "none",
    textAlign: "left",
    padding: 0
  }
}));

export default function Home() {
  const classes = useStyles();
  
  // State
  const [City, setCity] = useState("Tokyo");
  const [Weather, setWeather] = useState({});
  const [Temp, setTemp] = useState({});
  const [Icon, setIcon] = useState();
  
  // fetch data from api/express
  useEffect(() => {
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [City]);
  
  // *********** OWM API call and state initialization for current weather info**********
  const fetchWeatherData = async () => {
    try {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric&appid=fd41f9c5f443147155fff01a2ba29766`
      );
      if (data.ok) {
        const items = await data.json();

        // prepare variables from API for state
        const weather = items.weather[0];
        const weatherIcon =
          "http://openweathermap.org/img/wn/" + weather.icon + "@2x.png";
        const temperature = items.main.temp;
        // set state
        setCity(items.name);
        setWeather(weather);
        setIcon(weatherIcon);
        setTemp(temperature);
      } else {
        // error, city name not found in API 
        alert(
          "Sorry, that is not a real city. Please try again with a city on Earth."
        );
        console.log("failed... " + data.status);
      }
    } catch (e) {
      // error catch, connection issue
      alert(
        "Gee Whiz. Looks like there's no network access. Please make sure you're online and try again!"
      );
    }
  };
  // ********************************************************
  
  // Function for City Search Text Field
  let search = "";
  const CitySearch = e => {
    search = e.target.value;
  };
  // *********************************

  // Function to handle when City Search is submitted
  const handleSubmit = evt => {
    evt.preventDefault();
    setCity(search);
  };
  // *********************************

  return (
    <>
      <Typography variant="h2">Open Weather Map App</Typography>
      <div className={classes.middle}>
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="citySearch"
            size="small"
            label="enter city"
            onChange={CitySearch}
          />
          <Button size="small" variant="outlined" type="submit">
            Search
          </Button>
        </form>
        {/* <ListComponent classes={classes} title="Server.js express" /> */}
        <WeatherAPIComponent
          classes={classes}
          City={City}
          title="Current Weather"
          Weather={Weather}
          Temp={Temp}
          Icon={Icon}
        />
      </div>
    </>
  );
}
