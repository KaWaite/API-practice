import React from "react";

import Typography from "@material-ui/core/Typography";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

export default function About(props) {
  return (
    <div className="Main">
      <DirectionsRunIcon style={{ float: "left", fontSize: "150" }} />

      <div className="SubMain">
        <Typography variant="h2" component="h2" gutterBottom>
          About
        </Typography>
        <Typography variante="body2" paragraph>
          My name is Kyle Waite and I have been working over the past year and a
          half to build up my programming skills to be able to switch careers.
          {"</br>"} Though I haven't been able to devote as much time as I want
          to due to my full time job, I have become very comfortable with
          Javascript(in particular React including Hooks), HTML5 and CSS(I have
          used both Bootstrap and Material UI for most of my projects), git, as
          well as getting myself around Linux and the CLI. I am currently
          working on becoming more acquainted with the backend. I have worked
          with MongoDD in the past in all its non-relational, schema-based
          glory, and am currently building my skills with MySQL, which I much
          prefer.
        </Typography>
      </div>
    </div>
  );
}
