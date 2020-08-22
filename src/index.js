import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import App from "./App.js";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDom.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.querySelector("#root")
);
