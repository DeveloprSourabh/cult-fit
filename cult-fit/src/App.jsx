// import logo from "./logo.svg";
import React from "react";
import ReactDom from "react-dom";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Fitness from "./components/fitness/Fitness";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/fitness" element={<Fitness />} />
      </Routes>
    </>
  );
}

export default App;
