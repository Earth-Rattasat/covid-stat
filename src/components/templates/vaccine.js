import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

const useStyles = makeStyles({
  vaccineContainer: {
    display: "flex",
    flexDirection: "column",
    background: "#000000",
    padding: "40px 300px",
    width: "auto",
    color: "white",
    ["@media (max-width:1440px)"]: {
      padding: "40px 240px",
    },
    ["@media (max-width:1024px)"]: {
      padding: "40px 140px",
    },
  },
  gridCol2: {
    display: "grid",
    gridTemplateColumns: "30% auto",
    width: "100%",
  },
  flexRow: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  gridRow2: {
    display: "grid",
    gridTemplateRows: "50% 50%",
    width: "100%",
    alignItems: "center",
    textAlign: "left",
  },
  gridCol3: {
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    width: "100%",
    textAlign: "left",
  },
  gridRow3: {
    display: "grid",
    gridTemplateRows: "33% 33% 33%",
    width: "100%",
    alignItems: "center",
  },
  divider: {
    margin: "1rem 0rem",
  },
  dividerLine: {
    borderTop: "1px solid #ffffff",
    width: "100%",
    height: "0px",
  },
  textHeader: {
    fontSize: "2.7rem",
    fontWeight: "700",
    ["@media (max-width:1440px)"]: {
      fontSize: "1.7rem",
    },
    ["@media (max-width:1024px)"]: {
      fontSize: "1rem",
    },
  },
  textNormal: {
    fontSize: "1.5rem",
    fontWeight: "400",
    ["@media (max-width:1440px)"]: {
      fontSize: "1rem",
    },
  },
});

const Vaccine = () => {
  const [vaccine, setVaccine] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const getVaccine = async () => {
      const url = "https://covid19-cdn.workpointnews.com/api/vaccine.json";
      const response = await axios.get(url);
      response.data && setVaccine(response.data);
    };
    getVaccine();
  }, []);

  return (
    <div className={classes.vaccineContainer}>
      <div className={classes.gridCol2}>
        <div className={classes.gridRow2} style={{ paddingLeft: "100px" }}>
          <span>?????????????????????????????????</span>
          <span className={classes.textHeader}>????????????????????????????????????</span>
        </div>

        <div className={classes.gridCol3}>
          <div className={classes.gridRow2}>
            <span className={classes.textNormal}>??????????????????????????????????????????</span>
            <span className={classes.textHeader} style={{ color: "#ea5771" }}>
              {`+ ${vaccine?.all?.today}`}
              <span className={classes.textNormal}> ?????????</span>
            </span>
          </div>

          <div className={classes.gridRow2}>
            <span className={classes.textNormal}>????????????</span>
            <span className={classes.textHeader} style={{ color: "#ea5771" }}>
              {`+ ${vaccine?.all?.total}`}
              <span className={classes.textNormal}> ?????????</span>
            </span>
          </div>

          <div />
        </div>
      </div>

      <div className={classes.flexRow + " " + classes.divider}>
        <div className={classes.dividerLine} />
        <span style={{ width: "60%" }}>???????????????????????????????????????????????????????????????</span>
        <div className={classes.dividerLine} />
      </div>

      <div className={classes.gridCol2}>
        <div
          className={classes.gridRow3}
          style={{ paddingLeft: "100px", textAlign: "left" }}>
          <div />
          <span>????????????????????? 1 ????????????</span>
          <span>????????????????????? 2 ????????????</span>
        </div>

        <div className={classes.gridCol3}>
          <div className={classes.gridRow3}>
            <span className={classes.textNormal}>??????????????????????????????????????????</span>
            <span className={classes.textHeader} style={{ color: "#F5C744" }}>
              + {vaccine?.oneDose?.today?.trim()}{" "}
              <span className={classes.textNormal}>??????</span>
            </span>
            <span className={classes.textHeader} style={{ color: "#F5C744" }}>
              + {vaccine?.twoDose?.today}{" "}
              <span className={classes.textNormal}>??????</span>
            </span>
          </div>

          <div className={classes.gridRow3}>
            <span className={classes.textNormal}>????????????</span>
            <span className={classes.textHeader}>
              {vaccine?.oneDose?.total}{" "}
              <span className={classes.textNormal}>??????</span>
            </span>
            <span className={classes.textHeader}>
              {vaccine?.twoDose?.total}{" "}
              <span className={classes.textNormal}>??????</span>
            </span>
          </div>

          <div className={classes.gridRow3}>
            <span className={classes.textNormal}>???????????????????????????????????????????????????</span>
            <span className={classes.textHeader}>
              {vaccine?.oneDose?.percent}%
            </span>
            <span className={classes.textHeader}>
              {vaccine?.twoDose?.percent}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaccine;
