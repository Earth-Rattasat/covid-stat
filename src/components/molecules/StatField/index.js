import React from "react";

const StatField = ({ labelChange, statChange, style, fontStyle }) => {
  return (
    <div style={style}>
      <div>{labelChange}</div>
      <div style={fontStyle}>{statChange}</div>
    </div>
  );
};

export default StatField;
