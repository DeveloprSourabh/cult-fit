import React from "react";
import { Link } from "react-router-dom";
// import { ReactDOM } from "react";
import "./style.css";
// import { a } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="bas" class="navbar navbar-expand-lg navbar-dark bg-black">
        <a className="navbar-brand" href="/">
          <img
            className="navbar-img"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
            alt=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link" to="../fitness">
                FITNESS <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                CARE
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                MIND
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="../cultsport.com">
                STORE
              </a>
            </li>
          </ul>
        </div>
        <div
          style={{ marginLeft: "17rem" }}
          class="collapse navbarNav1 navbar-collapse   "
          id="navbarNav1"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a id="jpr" className="nav-link" href="#">
                <span style={{ fontSize: "20px", opacity: "70%" }}>JAIPUR</span>
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                  alt=""
                  className="navimg2"
                />
              </a>
            </li>
            <li class="nav-item active" id="app1app">
              <a class="nav-link" href="#">
                GET APP
              </a>
            </li>
            <li class="nav-item active" id="banda">
              <a class="nav-link" href="#">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/Profile.png"
                  alt=""
                  className="navimg3"
                />
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/cart-dark-theme.svg"
                  alt=""
                  className="navimg4"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
