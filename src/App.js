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
      <Router>
        <Home path="/" />
        <Dash path="dashboard/*" />
        <NotFound t={t} default />
      </Router>
    </div>
  );
}

App.prototype = {
  t: PropTypes.any.isRequired,
};

export default withNamespaces()(App);
