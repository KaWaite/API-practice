import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

// Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

// styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: "#d0dee0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(2),
    color: "#383838",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

// NavBar exporting component
export default function NavTabs() {
  const classes = useStyles();
  const getInitialUrl = () => {
    let url = window.location.href.split("/").pop();
    if (url === "site-goal") {
      return 1;
    } else if (url === "api-info") {
      return 2;
    } else if (url === "about") {
      return 3;
    } else {
      return 0;
    }
  };
  const [value, setValue] = React.useState(getInitialUrl());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        //   variant="fullWidth"
        className={classes.sectionDesktop}
        value={value}
        onChange={handleChange}
        // className={classes.title}
        aria-label="nav tabs"
      >
        <Tab label="Home" component={Link} to="/" {...a11yProps(0)} />
        <Tab label="API" component={Link} to={"/api-info"} {...a11yProps(2)} />
        <Tab
          label="Site Goal"
          component={Link}
          to="/site-goal"
          {...a11yProps(1)}
        />
        <Tab label="About" component={Link} to={"/about"} {...a11yProps(3)} />
      </Tabs>
    </>
  );
}
