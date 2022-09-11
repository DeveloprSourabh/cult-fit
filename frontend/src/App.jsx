// import logo from "./logo.svg";
import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import Fitness from "./components/fitness/Fitness";

import Cultpasselite from "./components/cultpasselite/Cultpasselite";
import Cultpasslive from "./components/cultpasslive/Cultpasslive";
import Culttransform from "./components/culttransform/Culttransform";
import Store from "./components/store/Store";
import Item1 from "./components/store/Item1";
import Cart from "./components/Cart";

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
        <Route exact path="cultsport.com" element={<Store />} />

        <Route exact path="cultsport/:id" element={<Item1 />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
