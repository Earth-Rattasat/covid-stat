import React from "react";
import { Link } from "@reach/router";

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link> |<Link to="dashboard">Dashboard</Link> |{" "}
      <Link to="FdEc4ca">404</Link>
    </nav>
  </div>
);

export default Home;
