import React from "react";
import "./fitness.css";
import Footer from "../footer/Footer";
import "./slide1.jpg";

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
        <div className="fitcard1">
          <a href="">
            <div className="card1h">
              <h1 className="cardh">cultpass</h1>
            </div>
            <div className="card1img">
              <img
                className="cardimg-1"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,ar_3.59,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                alt=""
              />
            </div>
            <div className="card1h6">Starting at ₹1250 / month</div>
          </a>
        </div>

        <div className="fitcard2">
          {/* <div className="fitcard"> */}
          <a href="">
            <div className="card1h">
              {" "}
              <h1 className="cardh">cultpass</h1>
            </div>
            <div className="card1img">
              <img
                className="cardimg-2"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                alt=""
              />
            </div>
            <div className="card1h6">Starting at ₹117 / month</div>
          </a>
          {/* </div> */}
        </div>
      </div>

      <div className="cename">
        <h2 className="ceh2">Centers near Vaishali Nagar down-arrow </h2>
      </div>

      <div className="js1">
        <div className="c1">
          <div className="js2">
            <a className="js1a" href="">
              <img
                className="js1img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,ar_1.77,fl_progressive,f_auto,q_auto:eco/dpr_2/v1/cult-media/v2web/centers/center_183_IMAGE_b7bc318f-8666-4c1f-b22a-1d87ca7a7543.png"
                alt=""
              />
            </a>
          </div>
          <div className="js3">
            <h2 className="jsh2">CULT MALVIYA NAGAR</h2>
          </div>
          <div className="js4">
            <h6 className="js1h6">Malviya Nagar • Group Classes</h6>
          </div>
          <div className="jsbtn1">
            <button className="jsbt">
              <p> TRY FOR FREE</p>
            </button>
          </div>
        </div>

        <hr />

        <div className="c2">
          <div className="js21">
            <a className="js1a" href="">
              <img
                className="js2img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_300,ar_1.77,fl_progressive,f_auto,q_auto:eco/dpr_2/image/icons/cult/no_gyms.png"
                alt=""
              />
            </a>
          </div>
          <div className="js23">
            <h2 className="jsh22">MORE CENTRES</h2>
          </div>
          <div className="js24">
            <h6 className="js1h26">Click on see more to expand your search</h6>
          </div>
          <div className="jsbtn21">
            <button className="jsbt2">
              <p>SEE MORE</p>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fitness;
