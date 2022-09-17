// import logo from "./logo.svg";
import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import Fitness from "./components/fitness/Fitness";

import Cultpasselite from "./components/cultpasselite/Cultpasselite";
import Cultpasslive from "./components/cultpasslive/Cultpasslive";
import Culttransform from "./components/culttransform/Culttransform";
import Store from "./components/store/Store";
import Item1 from "./components/store/Item1";
import Cart from "./components/Cart";
import Details from "./components/store/Details";

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

        <Route exact path="/cultsport.com" element={<Store />} />


        <Route exact path="cultsport/:id" element={<Item1 />} />
        <Route exact path="/cultsport.com/cart" element={<Cart />} />
        <Route exact path={`/cultsport/:id/cart`} element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
