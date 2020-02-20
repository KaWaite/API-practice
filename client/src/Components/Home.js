import React from "react";

import ListComponent from "./ListComponent";
import WeatherAPIComponent from "./WeatherAPIComponent";

// Material ui imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Home() {
  const classes = useStyles();

  return (
    <div className="Main">
      <h1>API: React, Express, (eventually)MySQL(maybe)</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-size-small" size="small" label="enter city" />
        <Button size="small" variant="contained" color="primary">
          Search
        </Button>
      </form>
      <div className={classes.middle}>
        <ListComponent classes={classes} title="Server.js express" />
        <WeatherAPIComponent classes={classes} title="From external API(OWM)" />
      </div>
    </div>
  );
}
