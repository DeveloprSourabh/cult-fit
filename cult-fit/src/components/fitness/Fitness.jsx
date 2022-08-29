import React from "react";
import "./fitness.css";
import Footer from "../footer/Footer";

const Fitness = () => {
  return (
    <>
      <div className="nav">
        <div className="nav1">
          <div className="sub head">
            <h6>cultpass ELITE</h6>
          </div>
          <div className="sub head">
            <h6>cultpass LIVE</h6>
          </div>
          <div className="sub head">
            <h6>cult Transform</h6>
          </div>
          <div className="btn">
            <a href="">
              <h6>COMPARE PLANS</h6>
            </a>
          </div>
        </div>
      </div>

      <div className="fithead">
        <div className="fitd1">
          <img
            className="fitmimg"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1600,ar_1.67,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/vm/47ebf3f3-2647-4f1e-a162-a5614891a753.png"
            alt=""
          />
          <div className="btnm">
            <button className="btn1">TRY FOR FREE</button>
          </div>
        </div>
      </div>

      <div className="fitcard">
        <a href="">
          <div className="fitcard1">
            <div className="card1h">cultpass</div>
            <div className="card1img">
              <img
                className="cardimg-1"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,ar_3.59,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                alt=""
              />
            </div>
            <div className="card1h6">Starting at ₹1250 / month</div>
          </div>
          <div className="fitcard2"></div>
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Fitness;
