import React from "react";
import StatField from "../../molecules/StatField";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  survivalStat: {
    height: "45%",
    background: "#ea5771",
    borderRadius: "10px",
    display: "flex",
  },
});

const StatCardMain = ({
  style,
  label,
  stat,
  statChange,
  labelChange,
  textColor,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.survivalStat} style={style}>
      <div style={{ width: "50%", textAlign: "left" }}>
        <div
          style={{
            height: "50%",
            paddingLeft: "20px",
            display: "flex",
            alignItems: "center",
            fontSize: "32px",
            color: "white",
          }}>
          {label}
        </div>
        <StatField
          style={{
            height: "calc(50% - 15px)",
            background: "rgba(255,255,255,0.9)",
            margin: "0px 20px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          fontStyle={{
            fontWeight: "600",
            fontSize: "40px",
            lineHeight: "48px",
            color: "#353538",
          }}
          statChange={statChange}
          labelChange={labelChange}
        />
      </div>
      <div
        style={{
          width: "50%",
          fontSize: "96px",
          lineHeight: "96px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {stat}
      </div>
    </div>
  );
};

export default StatCardMain;
