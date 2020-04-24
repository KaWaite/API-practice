import React from "react";

import Typography from "@material-ui/core/Typography";
import WebIcon from "@material-ui/icons/Web";

export default function ApiInfo() {
  return (
    <div className="SubMain">
      <WebIcon style={{ fontSize: 150 }} />
      <Typography variant="h2" component="h2" gutterBottom>
        API Information
      </Typography>
      <div className="content">
        <Typography variant="body2" gutterBottom>
          This app is using the very popular Open Weather Map API to fetch its
          data. Home is gathering the data for my locale(kind of) and then the
          user can(will be able to) search whichever city they want which will
          refresh WeatherAPIComponent to show the new data. This is my first
          external API use so at first the OWM API was confusing but now I find
          it easy enough to navigate all of the data that is receivable.
        </Typography>
      </div>
    </div>
  );
}
