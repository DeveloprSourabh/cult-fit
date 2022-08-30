import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <>
      <div>
        <div className="dd1">
          <div className="row row1">
            <div className="col-4 d1">
              <div>
                <img
                  className="gredi1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/gradient-circle/pink-blur-circle.svg"
                  alt=""
                />
              </div>
              <Link to="../fitness/cultpass-elite">
                <img
                  className="demo1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png"
                  alt=""
                />
              </Link>

              <div className="demodiv1">
                <h6>cultpass</h6>
                <img
                  className="demoim1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,ar_3.59,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                  alt=""
                />
                <div className="btm1">
                  <div className="btm">
                    <h3>Unlimited access to</h3>
                  </div>
                  <div className="ul">
                    <ul>
                      <li>At-center group classes</li>
                      <li>All ELITE & PRO gyms</li>
                      <li>At-home live workouts</li>
                    </ul>
                  </div>
                </div>
                <div className="btmb">
                  <button color="secondary" className="bestbtn1">
                    Try For Free
                  </button>
                  <button color="secondary" className="bestbtn-1">
                    Try For Free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 d2">
              <div>
                <img
                  className="gredi2"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/gradient-circle/golden-blur-circle.svg"
                  alt=""
                />
              </div>
              <Link to="../fitness/cultpass-live">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png"
                  alt=""
                  className="demo2"
                />
              </Link>
              <div className="demodiv1">
                <h6>cultpass</h6>
                <img
                  className="demoim1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,ar_2.63,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                  alt=""
                />
                <div className="btm1">
                  <div className="btm">
                    <h3>Unlimited access to</h3>
                  </div>
                  <div className="ul">
                    <ul>
                      <li>All PRO gyms</li>
                      <li>4 Sessions/m at ELITE gyms & group classes</li>
                      <li>At-home live workouts</li>
                    </ul>
                  </div>
                </div>
                <div className="btmb">
                  <button color="secondary" className="bestbtn2">
                    Try For Free
                  </button>
                  <button color="secondary" className="bestbtn-2">
                    Try For Free
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 d3">
              <Link to="../fitness/cult-transform">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,ar_1.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png"
                  alt=""
                  className="demo3"
                />
              </Link>
              <div className="demodiv1">
                <h6>cultpass</h6>
                <img
                  className="demoim1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                  alt=""
                />
                <div className="btm1">
                  <div className="btm">
                    <h3>Unlimited access to</h3>
                  </div>
                  <div className="ul">
                    <ul>
                      <li>At home workouts</li>
                      <li>Celebrity Workouts</li>
                      <li>Goal-based Workouts and Meditation Sesssions</li>
                    </ul>
                  </div>
                </div>
                <div className="btmb">
                  <button color="secondary" className="bestbtn3">
                    Try For Free
                  </button>
                  <button color="secondary" className="bestbtn-3">
                    Try For Free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
