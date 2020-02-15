import React, { useState, useEffect } from "react";
import "./App.css";

// Material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// import specialKey from "../../key";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: 200
    }
  }
}));

function App() {
  const classes = useStyles();

  // fetch data from api/express
  useEffect(() => {
    fetchItems();
    fetchName();
    // fetchTest();
    // fetchAPICall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [Items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/api/test");
    // console.log(data);
    const Items = await data.json();
    setItems(Items);
    // console.log(Items);
  };

  // ***********TEST**********
  const [Weather, setWeather] = useState({});
  const [Coord, setCoord] = useState({});

  const fetchName = async () => {
    const data = await fetch("/openWeatherMap");
    const blargh = await data.json();
    console.log(blargh);

    const data = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=fd41f9c5f443147155fff01a2ba29766"
    );
    console.log(data);
    const weatherData = await data.json();
    const test = weatherData.coord;
    setWeather(weatherData);
    setCoord(test);
    console.log(weatherData);
  };

  // EXPERIMENTAL API CALL****************************
  // const [test, fetchTest] = useState();

  // const testingTesting = async () => {
  //   const response = await fetch("https://api-v3.igdb.com/games", {
  //     method: "POST",
  //     header: {
  //       "user-key": "1b0d8d553a89e5a44baf056a37b94793"
  //     },
  //     body: {
  //       "fields name; limit 10;"
  //     }
  //   });
  // };
  // const [experiment, setExperiment] = useState();

  // const fetchAPICall = async () => {
  //   const response = await fetch("/express_backend");
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   setExperiment(body.express);
  // };

  // ********************************************************

  return (
    <div className="App">
      <div className="Main">
        <h1>IGDB API: React, Express, (eventually)MySQL(maybe)</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-size-small" size="small" label="Standard" />
          <Button size="small" variant="contained" color="primary">
            Submit
          </Button>
        </form>
        <h2>Items from app.get in server.js express</h2>
        <ul>
          {Items.map(item => (
            <li key={item.id}>
              {item.name} Number: {item.id}
            </li>
          ))}
        </ul>
        <h2>From external API(OWM)</h2>
        <ul>
          <li>{Weather.name}</li>
          <li>
            {Coord.lat} , {Coord.lon}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
