import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
// import Button from "@material-ui/core/Button";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navBar: {
    backgroundColor: "#b7d3d4"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#383838"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Open Weather Map API
          </Typography>
          <Tabs
            //   variant="fullWidth"
            value={value}
            onChange={handleChange}
            className={classes.title}
            aria-label="nav tabs"
          >
            <Tab label="Home" component={Link} to="/" {...a11yProps(0)} />
            <Tab
              label="Site Goal"
              component={Link}
              to="/site-goal"
              {...a11yProps(1)}
            />
            <Tab
              label="API"
              component={Link}
              to={"/api-info"}
              {...a11yProps(2)}
            />
            <Tab
              label="About"
              component={Link}
              to={"/about"}
              {...a11yProps(3)}
            />
          </Tabs>
          {/* <Button>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
