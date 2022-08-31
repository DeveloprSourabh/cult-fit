import React from "react";
import Subh from "../fitness/Subh";
import "./cultelite.css";

const Cultpasselite = () => {
  return (
    <>
      <Subh />
      <div>
        <div className="ppp">
          <div className="row nic1">
            <div className="col-6">
              <div className="nicimgd1">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_294,ar_6.55,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite.png"
                  alt=""
                  className="nicimg1"
                />
              </div>
              <div className="nic1h">
                <h1 className="nich1">
                  Unlimited access to everything in your city
                </h1>
              </div>
              <div className="nicds1">
                <h4 className="nich4">Unlimited access to</h4>
              </div>
              <div className="nicds2">
                <div className="nicimgd1">
                  <img
                    src="https://static.cure.fit/assets/images/orangeTick.png"
                    alt=""
                    className="nicimg2"
                  />
                  <div className="1nich6">
                    <h6 className="nich6">At-centre group classes</h6>
                  </div>
                </div>
                <div className="nicimgd1">
                  <img
                    src="https://static.cure.fit/assets/images/orangeTick.png"
                    alt=""
                    className="nicimg2"
                  />
                  <div className="1nich6">
                    <h6 className="nich6">All ELITE & PRO gyms</h6>
                  </div>
                </div>
                <div className="nicimgd1">
                  <img
                    src="https://static.cure.fit/assets/images/orangeTick.png"
                    alt=""
                    className="nicimg2"
                  />
                  <div className="1nich6">
                    <h6 className="nich6">At-home live workouts</h6>
                  </div>
                </div>
              </div>
              <div className="nicc">
                <h5 className="nicch5">Starting at ₹1271 / month</h5>
              </div>
              <div className="nicbtn1">
                <button className="niccbtn1">TRY FOR FREE</button>
                <button className="niccbtn2">TRY FOR FREE</button>
              </div>
              <div className="lst">
                <img
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_27,ar_0.96,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/offer.png"
                  alt=""
                  className="lsimg"
                />
                <p className="lp">SALE ON NOW</p>
              </div>
            </div>

            <div className="col-6">
              <div className="-crsl">
                <div id="demo" class="carousel zoom" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        className="alimg1"
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_968,ar_1.17,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/vm/ec6969b6-c9ef-4349-aae5-f076c66ab443.png"
                        alt="Los Angeles"
                        width="1100"
                        height="500"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        className="alimg2"
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/black1.png"
                        alt="Chicago"
                        width="1100"
                        height="500"
                      />
                    </div>
                  </div>

                  <a
                    class="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  ></a>
                  <a
                    class="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cult1">
          <h5 className="cult1h5">FEATURES</h5>
          <h2 className="cult1h2">For an active lifestyle</h2>
        </div>
      </div>
    </>
  );
};

export default Cultpasselite;
