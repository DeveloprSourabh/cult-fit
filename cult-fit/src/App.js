// import logo from "./logo.svg";
import React from "react";
// import ReactDom from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Fitness from "./components/fitness/Fitness";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fitness" element={<Fitness />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
