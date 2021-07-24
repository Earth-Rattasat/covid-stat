import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

const useStyles = makeStyles({
  vaccineContainer: {
    display: "flex",
    flexDirection: "column",
    background: "#000000",
    padding: "40px 60px",
    width: "calc(100vw - 120px)",
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
  },
  textNormal: {
    fontSize: "1.5rem",
    fontWeight: "400",
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
          <span>ความคืบหน้า</span>
          <span className={classes.textHeader}>การฉีดวัคซีน</span>
        </div>

        <div className={classes.gridCol3}>
          <div className={classes.gridRow2}>
            <span className={classes.textNormal}>ฉีดเพิ่มวันนี้</span>
            <span className={classes.textHeader} style={{ color: "#ea5771" }}>
              +{vaccine?.all?.today}{" "}
              <span className={classes.textNormal}>โดส</span>
            </span>
          </div>

          <div className={classes.gridRow2}>
            <span className={classes.textNormal}>สะสม</span>
            <span className={classes.textHeader} style={{ color: "#ea5771" }}>
              {vaccine?.all?.total}{" "}
              <span className={classes.textNormal}>โดส</span>
            </span>
          </div>

          <div />
        </div>
      </div>

      <div className={classes.flexRow + " " + classes.divider}>
        <div className={classes.dividerLine} />
        <span style={{ width: "40%" }}>ประชากรทีได้รับวัคซีน</span>
        <div className={classes.dividerLine} />
      </div>

      <div className={classes.gridCol2}>
        <div
          className={classes.gridRow3}
          style={{ paddingLeft: "100px", textAlign: "left" }}>
          <div />
          <span>ฉีดแล้ว 1 เข็ม</span>
          <span>ฉีดแล้ว 2 เข็ม</span>
        </div>

        <div className={classes.gridCol3}>
          <div className={classes.gridRow3}>
            <span className={classes.textNormal}>ฉีดเพิ่มวันนี้</span>
            <span className={classes.textHeader} style={{ color: "#F5C744" }}>
              +{vaccine?.oneDose?.today}{" "}
              <span className={classes.textNormal}>คน</span>
            </span>
            <span className={classes.textHeader} style={{ color: "#F5C744" }}>
              +{vaccine?.twoDose?.today}{" "}
              <span className={classes.textNormal}>คน</span>
            </span>
          </div>

          <div className={classes.gridRow3}>
            <span className={classes.textNormal}>สะสม</span>
            <span className={classes.textHeader}>
              {vaccine?.oneDose?.total}{" "}
              <span className={classes.textNormal}>คน</span>
            </span>
            <span className={classes.textHeader}>
              {vaccine?.twoDose?.today}{" "}
              <span className={classes.textNormal}>คน</span>
            </span>
          </div>

          <div className={classes.gridRow3}>
            <span className={classes.textNormal}>สัดส่วนต่อประชากร</span>
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
