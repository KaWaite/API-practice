import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import axios from "axios";
import "./App.css";

// Component imports
import Home from "./Components/Home";
import About from "./Components/About";
import Error404 from "./Components/Error404";
import NavBar from "./Components/NavBar";
import SiteGoal from "./Components/SiteGoal";
import ApiInfo from "./Components/ApiInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar About={About} />
        <div className="Main">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            {/* <Route path="/site-goal" render={() => <SiteGoal />} /> */}
            {/* <Route path="/api-info" render={() => <ApiInfo />} /> */}
            {/* <Route path="/about" render={() => <About />} /> */}
            <Route render={() => <Error404 />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
