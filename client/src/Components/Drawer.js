import React from "react";
import { Link } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import MoreIcon from "@material-ui/icons/MoreVert";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ComputerIcon from "@material-ui/icons/Computer";
import WebIcon from "@material-ui/icons/Web";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const getRoutes = (text) => {
    if (text === "Home") {
      return (
        <ListItem button key={text} component={Link} to={"/"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      );
    } else if (text === "Site Goal") {
      return (
        <ListItem button key={text} component={Link} to={"/site-goal"}>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      );
    } else if (text === "API") {
      return (
        <ListItem button key={text} component={Link} to={"/api-info"}>
          <ListItemIcon>
            <WebIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      );
    } else {
      return (
        <ListItem button key={text} component={Link} to={"/about"}>
          <ListItemIcon>
            <DirectionsRunIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      );
    }
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="drawer">
        {["Home", "Site Goal", "API", "About"].map((text, index) =>
          getRoutes(text)
        )}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="top">
        <IconButton
          onClick={toggleDrawer("top", true)}
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="top"
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          onOpen={toggleDrawer("top", true)}
        >
          {list("top")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
