import React from "react";
import WebIcon from "@material-ui/icons/Web";

export default function ApiInfo() {
  return (
    <div className="Main">
      <WebIcon style={{ fontSize: 150, float: "left" }} />
      <div className="SubMain">
        <h1>API Information</h1>
        <p>
          This app is using the very popular Open Weather Map API to fetch its
          data. Home is gathering the data for my locale(kind of) and then the
          user can(will be able to) search whichever city they want which will
          refresh WeatherAPIComponent to show the new data. This is my first
          external API use so at first the OWM API was confusing but now I find
          it easy enough to navigate all of the data that is receivable.
        </p>
      </div>
    </div>
  );
}
