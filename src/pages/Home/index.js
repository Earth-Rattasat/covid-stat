import React from "react";
import OverviewStat from "../../components/templates/OverviewStat";
import Vaccine from "../../components/templates/vaccine";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  homepage: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  statToday: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homepage}>
      <Vaccine />
      <div className={classes.statToday}>
        <OverviewStat />
      </div>
    </div>
  );
};

export default Home;
