import React from "react";
import CloseIcon from "@material-ui/icons/Close";

export default function Error404() {
  return (
    <div className="Main">
      <CloseIcon style={{ fontSize: 80 }} />
      <h1>
        I'm terribly, terribly sorry. The page you are Looking for could not be
        found...
      </h1>
    </div>
  );
}
