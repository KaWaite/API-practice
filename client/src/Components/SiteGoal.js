import React from "react";

import Typography from "@material-ui/core/Typography";
import ComputerIcon from "@material-ui/icons/Computer";

export default function SiteGoal() {
  return (
    <div className="Main">
      <ComputerIcon style={{ float: "left", fontSize: "150" }} />
      <div className="SubMain">
        <Typography variant="h2" component="h2" gutterBottom>
          Site Goal
        </Typography>
        <Typography variante="body2" gutterBottom>
          This will be the write-up for why I am making this site.
        </Typography>
      </div>
    </div>
  );
}
