import React from "react";
import StatField from "../../molecules/StatField";

const StatCardCenter = ({
  style,
  label,
  stat,
  statChange,
  labelChange,
  textColor,
}) => {
  return (
    <div style={style}>
      <div
        style={{
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "35px",
          color: textColor || "#353538",
        }}>
        {label}
      </div>
      <div
        style={{
          fontWeight: "400",
          fontSize: "54px",
          lineHeight: "54px",
          color: textColor || "#353538",
        }}>
        {stat}
      </div>
      <StatField
        statChange={statChange}
        labelChange={labelChange}
        style={{
          height: "calc(30%)",
          background: "rgba(255,255,255,0.9)",
          margin: "0px 20px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        fontStyle={{
          fontWeight: "600",
          fontSize: "26px",
          lineHeight: "30px",
          color: "#353538",
        }}
      />
    </div>
  );
};

export default StatCardCenter;
