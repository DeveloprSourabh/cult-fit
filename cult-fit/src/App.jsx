// import logo from "./logo.svg";
import React from "react";
import ReactDom from "react-dom";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Fitness from "./components/fitness/Fitness";
import Navbar from "./components/header/Navbar";
import Cultpasselite from "./components/cultpass/Cultpasselite";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/fitness" element={<Fitness />} />
        <Route
          exact
          path="/fitness/cultpass-elite"
          element={<Cultpasselite />}
        />
      </Routes>
    </>
  );
}

export default App;
