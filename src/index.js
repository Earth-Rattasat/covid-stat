import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./index.css";
import App from "./App";
import StoreProvider from "./stroe/store";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root"),
);
