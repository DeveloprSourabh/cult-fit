import React from "react";
import "./store.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Storenav = () => {
  const getdata = useSelector((State) => State.cartreducer.carts);
  console.log(getdata);

  return (
    <div>
      <div className="nav1s">
        <div className="navcontainer">
          <div className="navimg">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
              alt=""
              className="navimg1"
            />
          </div>
          <div className="ul">
            <ul className="navul1">
              <li>Men sportswear</li>
              <li>Women sportswear</li>
              <li>Smart Equipment</li>
              <li>Outdoor cycles</li>
              <li>Accessories</li>
              <li>Nutrition</li>
              <li>Wellness & Care</li>
            </ul>
          </div>
          <div className="nav1logo">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/cultsport/prod/Profile.svg"
              alt=""
              className="  navlogo1"
            />
            <NavLink to="../cart">
              <img
                src="https://static.cure.fit/assets/images/cart-icon-new.svg"
                alt=""
                className="navlogo2"
              />
              <p className="noti"></p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storenav;
