import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>LOGIN PAGE</h1>
          </Route>
          <Route path="/checkout">
            <h1>CHECKOUT PAGE</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>HOME PAGE</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
