import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div>
      <a className="heading" href="/">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
          alt=""
        />
      </a>

      <div className="type flot">
        <span>
          <div className="flot1">
            <a className="opt" href="">
              <h5>FITNESS</h5>
            </a>
          </div>
        </span>

        <span>
          <div className="flot1">
            <a className="opt" href="">
              <h5>CARE</h5>
            </a>
          </div>
        </span>
        <span>
          <div className="flot1">
            <a className="opt" href="">
              <h5>MIND</h5>
            </a>
          </div>
        </span>
        <span>
          <div className="flot1">
            <a className="opt" href="">
              <h5>STORE</h5>
            </a>
          </div>
        </span>
      </div>
      <div className="end">
        <div className="location flot">
          <div>
            <p>
              JAIPUR <i class="fa fa-map-marker"></i>
            </p>
          </div>
        </div>
        <div className="download flot">
          <div>
            <h4 className="app">GET APP</h4>
          </div>
        </div>
        <div className="icon flot">
          <div>
            <i class="fa fa-user"></i>
          </div>
        </div>
        <div className="icon1 flot">
          <div>
            <i class="fa  fa-shopping-cart" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
