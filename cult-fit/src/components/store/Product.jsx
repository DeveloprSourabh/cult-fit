import React from "react";
import "./store.css";

const Product = () => {
  return (
    <>
      <div className="makecard">
        <div className="cimg1">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill/dpr_2/cultgear-content/mU1dZAHqT6pjRn55ZWYvq6Mf"
            alt=""
            className="makecardimg"
          />
        </div>
        <div className="makecarddiv2">CULTSPORT</div>
        <div className="makecarddiv3">FormFit High Impact Ivy Sports Bra</div>
        <div className="makecarddiv4">
          <p style={{ fontWeight: "600" }} className="makecardp">
            ₹ 1499{" "}
          </p>
          <p style={{ textDecoration: "line-through" }} className="makecardp">
            ₹ 2499
          </p>
          <p
            style={{ color: "rgb(255 138 183)", fontWeight: "700" }}
            className="makecardp"
          >
            40% Off
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
