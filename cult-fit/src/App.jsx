// import logo from "./logo.svg";
import React from "react";
import ReactDom from "react-dom";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Fitness from "./components/fitness/Fitness";

import Cultpasselite from "./components/cultpasselite/Cultpasselite";
import Subh from "./components/fitness/Subh";
import Cultpasslive from "./components/cultpasslive/Cultpasslive";
import Culttransform from "./components/culttransform/Culttransform";
// import Store from "./components/store/Store";
// import Item1 from "./components/store/Item1";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/fitness" element={<Fitness />} />
        <Route
          exact
          path="/fitness/cultpass-elite"
          element={<Cultpasselite />}
        />
        <Route exact path="/fitness/cultpass-live" element={<Cultpasslive />} />
        <Route
          exact
          path="/fitness/cult-transform"
          element={<Culttransform />}
        />
        {/* <Route exact path="cultsport.com" element={<Store />} />
        <Route
          exact
          path="cultsport.com/formfit-high-impact-ivy-sports-bra-500324/product/1382"
          element={<Item1 />} */}
        {/* /> */}
      </Routes>
    </>
  );
}

export default App;
