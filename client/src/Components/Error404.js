import React from "react";

import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

export default function Error404() {
  return (
    <div className="Main">
      <CloseIcon style={{ fontSize: 80 }} />
      <Typography variant="h2" component="h2" gutterBottom>
        I'm terribly, terribly sorry. The page you are Looking for could not be
        found...
      </Typography>
    </div>
  );
}
