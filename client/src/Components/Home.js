import React, { useState } from "react";

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
  let search = "";

  const [City, setCity] = useState("Tokyo");

  // Function for City Search Text Field
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
          city={City}
          title="Current Weather"
        />
      </div>
    </>
  );
}
