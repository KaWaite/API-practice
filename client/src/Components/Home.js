import React from "react";

// import ListComponent from "./ListComponent";
import WeatherAPIComponent from "./WeatherAPIComponent";

// Material ui imports
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
    background: "#c7ddde",
    border: "0.1px solid grey"
  },
  list: {
    listStyleType: "none",
    textAlign: "left",
    padding: 0
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <h1>API: React, Express, (eventually)MySQL(maybe)</h1>
      <div className={classes.middle}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-size-small" size="small" label="enter city" />
          <Button size="small" variant="outlined">
            Search
          </Button>
        </form>
        {/* <ListComponent classes={classes} title="Server.js express" /> */}
        <WeatherAPIComponent classes={classes} title="Current Weather" />
      </div>
    </>
  );
}
