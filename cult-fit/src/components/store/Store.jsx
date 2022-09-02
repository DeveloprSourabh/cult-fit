import React from "react";
import Storenav from "./Storenav";
import Ncard from "./Ncard";
import Cardapi from "./Cardapi";

const Store = () => {
  return (
    <div style={{ background: "white" }}>
      <div className="storenavbar">
        <Storenav />
      </div>
      <div
        id="demo"
        className="carousel sz-slider slide caras"
        data-ride="carousel"
      >
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/a8d099b9-01e4-4c51-a298-529c93280984.png"
              alt="Los Angeles"
              width="1936"
              height="400rem"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/100fe8e8-4f37-484f-ac33-326b69b4e127.png"
              alt="Chicago"
              width="1936"
              height="400rem"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/f39bde8c-76e5-40e9-b01f-4db291fd99ef.jpg"
              alt="New York"
              width="1936"
              height="400rem"
            />
          </div>
        </div>

        <a className="carousel-control-prev" href="#demo" data-slide="prev"></a>
        <a className="carousel-control-next" href="#demo" data-slide="next"></a>
      </div>
      
      {Cardapi.map(Ncard)}
    </div>
  );
};

export default Store;
