import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from "axios";
import "./App.css";

// Material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(4),
      width: 200
    }
  },
  middle: {
    display: "flex",
    margin: 0,
    padding: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  area: {
    padding: "20px",
    margin: "50px",
    border: "1px solid black"
  },
  list: {
    listStyleType: "none",
    textAlign: "left",
    padding: 0
  }
}));

function App() {
  const classes = useStyles();

  // fetch data from api/express
  useEffect(() => {
    fetchItems();
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ****useEffect setting state for local api in server.js****
  const [Items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/api/test");
    const Items = await data.json();
    setItems(Items);
  };
  // **********************************************************

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
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <div className="Main">
              <h1>API: React, Express, (eventually)MySQL(maybe)</h1>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-size-small"
                  size="small"
                  label="Standard"
                />
                <Button size="small" variant="contained" color="primary">
                  Submit
                </Button>
              </form>
              <div className={classes.middle}>
                <div className={classes.area}>
                  <h2>Server.js express</h2>
                  <ul className={classes.list}>
                    {Items.map(item => (
                      <li key={item.id}>
                        {item.id}: {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={classes.area}>
                  <h2>From external API(OWM)</h2>
                  <h3>{Weather.name}</h3>
                  <h4>
                    {Coord.lat} , {Coord.lon}
                  </h4>
                </div>
              </div>
            </div>
          )}
        />
        <Route path="/test" render={() => <h1>test worked</h1>} />
      </div>
    </Router>
  );
}

export default App;
