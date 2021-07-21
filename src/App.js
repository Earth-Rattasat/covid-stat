import "./App.css";
import React, { useState } from "react";
import { Router } from "@reach/router";
import { withNamespaces } from "react-i18next";
import i18n from "./locales/i18n";
import PropTypes from "prop-types";
import Home from "./pages/Home";
import Dash from "./pages/Dash";
import NotFound from "./pages/NotFound";
function App(prop) {
  const { t } = prop;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home path="/" />
          <Dash path="dashboard/*" />
          <NotFound t={t} default />
        </Router>
        <div>
          <button onClick={() => changeLanguage("th")}>th</button>
          <button onClick={() => changeLanguage("en")}>en</button>
          <h1>{t("Hello")}</h1>
        </div>
      </header>
    </div>
  );
}

App.prototype = {
  t: PropTypes.any.isRequired,
};

export default withNamespaces()(App);
