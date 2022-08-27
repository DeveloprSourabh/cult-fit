// import logo from "./logo.svg";
import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import Home from "./components/home/Home";
import Fitness from "./components/fitness/Fitness";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/fitness" component={Fitness}></Route>
      </Switch>
    </>
  );
}

export default App;
