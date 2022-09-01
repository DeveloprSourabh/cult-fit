import React from "react";
import { Link } from "react-router-dom";
// import { ReactDOM } from "react";
import "./style.css";
// import { a } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="fix">
        <div>
          <div>
            <Link to="/">
              <img
                className="imglogo"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="div0">
        <div className="div1">
          <div>
            <h5>
              <Link to="/fitness">FITNESS </Link>
            </h5>
          </div>
        </div>
        <div className="div1">
          <div>
            <Link to="/">
              <h5>CARE</h5>
            </Link>
          </div>
        </div>
        <div className="div1">
          <div>
            <h5>
              {" "}
              <Link to="/home">MIND</Link>
            </h5>
          </div>
        </div>
        <div className="div1">
          <div>
            <h5>
              <a href="cultsport.com">STORE </a>
            </h5>
          </div>
        </div>
      </div>
      <div className="jpr1">
        <div className="jpr">
          <div className="zis">
            <Link className="zi" to="/home ">
              JAIPUR
              <img
                className="icon1"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="app">
          <div>
            <Link className="app1 zi" to="/home">
              GET APP
            </Link>
          </div>
        </div>
        <div className="height">
          <div>
            <Link to="/fitness">
              <img
                className="zi location"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/fitness">
              <img
                className="zi cart"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
