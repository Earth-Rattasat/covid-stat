import React from "react";
import { Router, Link } from "@reach/router";
import Invoice from "../Invoice";
import Team from "../Team";

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

export default Dash;
