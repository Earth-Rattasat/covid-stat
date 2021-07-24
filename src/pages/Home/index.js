import React from "react";
import OverviewStat from "../../components/templates/OverviewStat";
import Vaccine from "../../components/templates/vaccine";

const Home = () => (
  <div>
    <Vaccine />
    <OverviewStat style={{ marginTop: "60px" }} />
  </div>
);

export default Home;
