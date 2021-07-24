import React from "react";
import { Link } from "@reach/router";
import Vaccine from "../../components/templates/vaccine";

const Home = () => (
  <div>
    <Vaccine />
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link> |<Link to="dashboard">Dashboard</Link> |{" "}
      <Link to="FdEc4ca">404</Link>
    </nav>
  </div>
);

const statListCenter = [
  {
    style: {
      width: "calc(100% / 3)",
      background: "linear-gradient(116.97deg,#ffc700 3.62%,#ecb800 90.96%)",
      borderRadius: "10px",
      marginRight: "10px",
    },
    label: "กำลังรักษา",
    stat: "143,744",
    labelChange: "เพิ่มขึ้น",
    statChange: "5,647",
  },
  {
    style: {
      width: "calc(100% / 3)",
      background: "#039245",
      borderRadius: "10px",
    },
    label: "หายแล้ว",
    stat: "320,152",
    labelChange: "เพิ่มขึ้น",
    statChange: "7,775",
    textColor: "white",
  },
  {
    label: "เสียชีวิต",
    style: {
      width: "calc(100% / 3)",
      background: "#d22d36",
      marginLeft: "10px",
      borderRadius: "10px",
    },
    stat: "3,717",
    textColor: "white",
    labelChange: "เพิ่มขึ้น",
    statChange: "114",
  },
];

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homepage}>
      <div className={classes.overviewStat}>
        <div className={classes.dashboardStat}>
          <StatCardMain
            label="ผู้ติดเชื้อสะสม"
            stat="467,707"
            labelChange="เพิ่มขึ้น"
            statChange="14,575"
          />
          <div className={classes.dashboardStatUnder}>
            {statListCenter.map((child, idx) => (
              <StatCardCenter key={idx} {...child} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
