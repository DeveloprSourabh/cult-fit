import React from "react";
import Product from "./Product";
import Storenav from "./Storenav";

const Store = () => {
  return (
    <div>
      <div className="storenavbar">
        <Storenav />
      </div>
      <div
        id="demo"
        class="carousel sz-slider slide caras"
        data-ride="carousel"
      >
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/a8d099b9-01e4-4c51-a298-529c93280984.png"
              alt="Los Angeles"
              width="1535"
              height="298"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/100fe8e8-4f37-484f-ac33-326b69b4e127.png"
              alt="Chicago"
              width="1535"
              height="298"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/f39bde8c-76e5-40e9-b01f-4db291fd99ef.jpg"
              alt="New York"
              width="1535"
              height="298"
            />
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev"></a>
        <a class="carousel-control-next" href="#demo" data-slide="next"></a>
      </div>
      <Product />
    </div>
  );
};

export default Store;
