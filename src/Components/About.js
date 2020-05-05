import React from "react";

import Typography from "@material-ui/core/Typography";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

export default function About(props) {
  return (
    <div className="Main-alt">
      <DirectionsRunIcon style={{ fontSize: "150" }} />

      <Typography variant="h2" component="h2" gutterBottom>
        About
      </Typography>
      <div className="content">
        <Typography variante="body2" paragraph>
          My name is Kyle Waite. <br />I am a techy from Canada that currently
          lives in Yokohama, Japan. Over the past 2 years in Japan, I have been
          upskilling myself with front-end(<b>React</b>) and back-end(
          <b>node</b>) in order to create modern web applications. <br /> I have
          a clear understanding of scoping, agile and sprints when it comes to
          projects and working with a team. Currently available for remote and
          in-person roles(Tokyo/Yokohama area).
        </Typography>
      </div>
    </div>
  );
}
