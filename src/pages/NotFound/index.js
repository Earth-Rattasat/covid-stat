import React from "react";
import { Link } from "@reach/router";

const NotFound = (props) => {
  const { t } = props;
  return (
    <div>
      <h1>{t("error")}</h1>
      <nav>
        <Link to="/">Back</Link>
      </nav>
    </div>
  );
};

export default NotFound;
