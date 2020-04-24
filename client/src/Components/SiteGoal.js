import React from "react";

import Typography from "@material-ui/core/Typography";
import ComputerIcon from "@material-ui/icons/Computer";

export default function SiteGoal() {
  return (
    <div className="SubMain">
      <ComputerIcon style={{ fontSize: "150" }} />
      <Typography variant="h2" component="h2" gutterBottom>
        Site Goal
      </Typography>
      <div className="content">
        <Typography variant="body2" gutterBottom>
          This will be the write-up for why I am making this site.
        </Typography>
      </div>
    </div>
  );
}
