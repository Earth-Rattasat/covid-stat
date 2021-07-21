import "./App.css";
import React, { useState } from "react";
import { Router, Link, useParams } from "@reach/router";
import { withNamespaces } from "react-i18next";
import i18n from "./locales/i18n";
import PropTypes from "prop-types";
import { useObserver } from "mobx-react";
import { StoreContext } from "./store/store";

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link> |<Link to="dashboard">Dashboard</Link> |{" "}
      <Link to="FdEc4ca">404</Link>
    </nav>
  </div>
);

const Dash = ({ children = null }) => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="123">Invoice</Link> |<Link to="team">Team</Link> |
      <Link to="/">Home</Link>
    </nav>
    <hr />
    {children}
    <Router>
      <Invoice path=":invoiceId" />
      <Team path="team" />
    </Router>
  </div>
);

const Invoice = () => {
  const params = useParams();
  return (
    <div>
      <h1>
        Invoice
        {params.invoiceId}
      </h1>
    </div>
  );
};

const BugsList = () => {
  const store = React.useContext(StoreContext);

  return useObserver(() => (
    <ul>
      {store.bugs.map((bug) => (
        <li key={bug}>{bug}</li>
      ))}
    </ul>
  ));
};

const BugsForm = () => {
  const store = React.useContext(StoreContext);
  const [bug, setBug] = useState("");

  return (
    <form
      onSubmit={(e) => {
        store.addBug(bug);
        setBug("");
        e.preventDefault();
      }}>
      <input
        type="text"
        value={bug}
        onChange={(e) => {
          setBug(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const Team = () => (
  <div>
    <BugsList />
    <BugsForm />
  </div>
);
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

NotFound.prototype = {
  t: PropTypes.any.isRequired,
};

export default withNamespaces()(App);
