import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";

import "./App.css";
import Checkout from "./Checkout";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>LOGIN PAGE</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
