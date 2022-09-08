import React from "react";
import "./store.css";

const Storenav = () => {
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
            <img
              src="https://static.cure.fit/assets/images/cart-icon-new.svg"
              alt=""
              className="navlogo2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storenav;