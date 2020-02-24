import React from "react";
import ComputerTwoToneIcon from "@material-ui/icons/ComputerTwoTone";

export default function SiteGoal() {
  return (
    <div className="Main">
      <ComputerTwoToneIcon style={{ float: "left", fontSize: "150" }} />
      <div className="SubMain">
        <h1>Site Goal</h1>
        <p>This will be the write-up for why I am making this site.</p>
      </div>
    </div>
  );
}
