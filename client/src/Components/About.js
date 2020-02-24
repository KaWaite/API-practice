import React from "react";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

export default function About(props) {
  return (
    <div className="Main">
      <DirectionsRunIcon style={{ float: "left", fontSize: "150" }} />

      <div className="SubMain">
        <h1>About</h1>
        <p>
          My name is Kyle Waite and I have been working over the past year and a
          half to build up my programming skills to be able to switch careers.
          {"\n"}
          Though I haven't been able to devote as much time as I want to due to
          a draining full time job, I have become very comfortable with
          Javascript(in particular React), HTML5 and CSS(I have used both
          Bootstrap and Material UI for most of my projects).
        </p>
      </div>
    </div>
  );
}
