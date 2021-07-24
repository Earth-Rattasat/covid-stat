import React from "react";
import { makeStyles } from "@material-ui/styles";
import StatCardCenter from "../../organisms/StatCardCenter";
import StatCardMain from "../../organisms/StatCardMain";
import axios from "axios";

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

const OverviewStat = ({ style }) => {
  const classes = useStyles();
  const [statCardMainInfo, setStatCardMainInfo] = React.useState({});
  const [statListState, setStatListState] = React.useState(statListCenter);
  React.useEffect(() => {
    const getAttibuteFromString = (srcString) => {
      const labelMap = {
        "(เพิ่ม": "เพิ่มขึ้น",
        "(ลด": "ลดลง",
        "(คงที่": "คงที่",
      };
      let strSplit = srcString.split(")")[0];
      let labelChange = labelMap[strSplit.split(" ")[0]];
      let statChange = Number(
        strSplit
          .split(" ")
          .map((str) => parseInt(str))
          .filter((number) => number)
          .pop(),
      ).toLocaleString("th-TH");
      return { labelChange, statChange };
    };

    axios
      .get("https://covid19-cdn.workpointnews.com/api/constants.json")
      .then(({ data }) => {
        setStatCardMainInfo({
          label: "ผู้ติดเชื้อสะสม",
          stat: Number(data["ผู้ติดเชื้อ"]).toLocaleString("th-TH"),
          ...getAttibuteFromString(data["โน๊ตผู้ติดเชื้อ"]),
        });

        setStatListState(
          statListCenter.map((statObject) => {
            let { label } = statObject;
            return {
              ...statObject,
              stat: Number(data[label]).toLocaleString("th-TH"),
              ...getAttibuteFromString(data[`โน๊ตผู้${label}`]),
            };
          }),
        );
      });
  }, []);

  return (
    <div className={classes.overviewStat} style={style}>
      <div className={classes.dashboardStat}>
        <StatCardMain {...statCardMainInfo} />
        <div className={classes.dashboardStatUnder}>
          {statListState.map((child, idx) => (
            <StatCardCenter key={idx} {...child} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewStat;
