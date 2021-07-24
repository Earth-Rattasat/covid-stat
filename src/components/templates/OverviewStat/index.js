import React from "react";
import { makeStyles } from "@material-ui/styles";
import StatCardCenter from "../../organisms/StatCardCenter";
import StatCardMain from "../../organisms/StatCardMain";

const useStyles = makeStyles({
  homepage: {
    display: "flex",
    height: "100vh",
    alignItems: "center",
  },
  overviewStat: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "344px",
  },
  dashboardStat: { width: "50%" },
  dashboardStatUnder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "45%",
    margin: "10px 0px",
  },
});

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

const OverviewStat = () => {
  const classes = useStyles();

  return (
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
  );
};

export default OverviewStat;