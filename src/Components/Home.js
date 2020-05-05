import React, { useState, useEffect } from "react";

// import ListComponent from "./ListComponent";
import WeatherAPIComponent from "./WeatherAPIComponent";

// Material ui imports
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Home() {
  // let search = "";

  const [City, setCity] = useState("Tokyo");
  const [Search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [City]);

  // Function for City Search Text Field
  const CitySearch = (e) => {
    setSearch(e.target.value);
  };
  // *********************************

  // Function to handle when City Search is submitted
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCity(Search);
  };
  // *********************************

  return (
    <div className="SubMain">
      <h1>Open Weather Map App</h1>
      <WeatherAPIComponent city={City} title="Current Weather" />
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="citySearch"
          size="small"
          label="enter city"
          value={Search}
          onChange={CitySearch}
        />
        <Button size="small" variant="outlined" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
