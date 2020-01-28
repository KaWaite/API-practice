import React, { useState, useEffect } from "react";
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
  }
}));

function App() {
  const classes = useStyles();

  // fetch data from api/express
  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [Items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/api/test");
    console.log(data);
    const Items = await data.json();
    setItems(Items);
    console.log(Items);
  };

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
        <ul>
          {Items.map(item => (
            <li>
              {item.name} Number: {item.id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
