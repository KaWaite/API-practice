import React from "react";

import Typography from "@material-ui/core/Typography";
import ComputerIcon from "@material-ui/icons/Computer";

export default function SiteGoal() {
  return (
    <div className="Main-alt">
      <ComputerIcon style={{ fontSize: "150" }} />
      <Typography variant="h2" component="h2" gutterBottom>
        Site Goal
      </Typography>
      <div className="content">
        <Typography variant="body1" gutterBottom>
          This site has helped me solidify my understanding of various skills
          including: fetch API, svg creation, routing and deployment.
        </Typography>
      </div>
    </div>
  );
}
