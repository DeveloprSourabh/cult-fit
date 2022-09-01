import React from "react";
import "./fitness.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import Scrollm from "./Scrollm";
import Subh from "./Subh";
import Navbar from "../header/Navbar";

const Fitness = () => {
  return (
    <>
      <Navbar />
      <Subh />

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
        <h2 className="ceh2">Centers near </h2>
        <p className="cenamep">
          Vaishali Nagar
          <i class="fa-solid fa-angle-down"></i>
        </p>
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

      <div className="nc">
        <div className="nc1h">
          <h4 className="nch4">AT-CENTER</h4>
        </div>
        <div className="nc2h">
          <h1 className="nch1">Trainer-led group classes</h1>
        </div>
      </div>
      <Scrollm />
      <div className="nc">
        <div className="nc1h">
          <h4 className="nch4">AT-HOME</h4>
        </div>
        <div className="nc2h">
          <h1 className="nch1">Live group workouts with calorie tracking</h1>
        </div>
      </div>

      <div className="hc1">
        <div className="row hr1">
          <div className="col-3">
            <a href="">
              <p className="nub">34+ LIVE</p>
              <img
                className="h1img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,ar_1.77,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/diy/2b914243-9144-4fb3-a003-126805cefbac"
                alt=""
              />
            </a>
            <div className="aimg">
              <p className="ap">Vasudha A</p>
              <h4 className="ah">Shed it 2: Lower Body</h4>
              <p className="1ap">SNC • BEGINNER • 30 Min</p>
              <button className="abtn">JOIN</button>
            </div>
          </div>
          <div className="col-3">
            <a href="">
              <p className="nub">24+ LIVE</p>
              <img
                className="h1img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,ar_1.77,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/diy/afa4b511-66cf-4a15-acc4-dc2d9f32d547"
                alt=""
              />
            </a>
            <div className="aimg">
              <p className="ap">Suvini M</p>
              <h4 className="ah">Cardio HEAT</h4>
              <p className="1ap">CARDIO • INTERMEDIATE • 45 Min</p>
              <button className="abtn">JOIN</button>
            </div>
          </div>
          <div className="col-3">
            <a href="">
              <p className="nub">56+ LIVE</p>
              <img
                className="h1img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,ar_1.77,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/diy/eb75da7e-b237-44d0-833f-0a38ac13952a"
                alt=""
              />
            </a>
            <div className="aimg">
              <p className="ap">Divya R</p>
              <h4 className="ah">Yoga Special: Sivanand</h4>
              <p className="1ap">YOGA • BEGINNER • 50 Min</p>
              <button className="abtn">JOIN</button>
            </div>
          </div>
          <div className="col-3">
            <a href="">
              <p className="nub">47+ LIVE</p>
              <img
                className="h1img"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,ar_1.77,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/diy/2501ef7d-247e-4bde-a3bf-5c6bd508fb4e"
                alt=""
              />
            </a>
            <div className="aimg">
              <p className="ap">Anurag V</p>
              <h4 className="ah">Dance Fitness Xpress</h4>
              <p className="1ap">DANCE • BEGINNER • 30 Min</p>
              <button className="abtn">JOIN</button>
            </div>
          </div>
        </div>
      </div>

      <div className="nc">
        <div className="nc2h">
          <h1 className="nch1 ncch1">Choose your cultpass</h1>
        </div>
        <div className="nc1h ncc1h">
          <h4 className="nch4">3 flexible plans to suit your fitness needs</h4>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <td></td>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_89,ar_3.59,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                  alt=""
                />
              </div>
            </th>
            <th>
              <div className="td1">
                <img
                  className="timg2"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_65,ar_2.63,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                  alt=""
                />
              </div>
            </th>
            <th>
              <div className="td1">
                <img
                  className="timg3"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_71,ar_2.86,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
                  alt=""
                />
              </div>
            </th>
          </tr>

          <tr>
            <th>ELITE Gyms & At Centre Group Classes</th>
            <td></td>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/blue-tick-circle.png"
                  alt=""
                />
                <h5>Unlimited</h5>
              </div>
            </th>
            <th>
              <div className="td1">
                <h5>04 Sessions/ month</h5>
              </div>
            </th>
            <th>
              <div className="td1">
                <img
                  className="timg3"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/opaque-white-circle-cross-4.svg"
                  alt=""
                />
              </div>
            </th>
          </tr>

          <tr>
            <th>PRO Gyms</th>
            <td></td>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/blue-tick-circle.png"
                  alt=""
                />
                <h5>Unlimited</h5>
              </div>
            </th>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/blue-tick-circle.png"
                  alt=""
                />
                <h5>Unlimited</h5>
              </div>
            </th>

            <th>
              <div className="td1">
                <img
                  className="timg3"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/opaque-white-circle-cross-4.svg"
                  alt=""
                />
              </div>
            </th>
          </tr>

          <tr>
            <th>Smart workout plan</th>
            <td></td>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/blue-tick-circle.png"
                  alt=""
                />
                <h5>Unlimited</h5>
              </div>
            </th>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/blue-tick-circle.png"
                  alt=""
                />
                <h5>Unlimited</h5>
              </div>
            </th>

            <th>
              <div className="td1">
                <img
                  className="timg3"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/opaque-white-circle-cross-4.svg"
                  alt=""
                />
              </div>
            </th>
          </tr>

          <tr>
            <th>At home workouts</th>
            <td></td>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/blue-tick-circle.png"
                  alt=""
                />
                <h5>Unlimited</h5>
              </div>
            </th>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/blue-tick-circle.png"
                  alt=""
                />
                <h5>Unlimited</h5>
              </div>
            </th>
            <th scope="col">
              <div className="td1">
                <img
                  className="timg1"
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_20,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/icons/blue-tick-circle.png"
                  alt=""
                />
                <h5>Unlimited</h5>
              </div>
            </th>
          </tr>

          <tr>
            <th></th>
            <td></td>
            <th scope="col">
              <div className="td1">Starting at ₹1250 / month</div>
              <button className="tbtn1">BUY NOW</button>
            </th>
            <th scope="col">
              <div className="td1">Starting at Rs. 999/mo</div>
              <button className="tbtn2">BUY NOW</button>
            </th>
            <th scope="col">
              <div className="td1">Starting at ₹117 / month </div>
              <button className="tbtn3">BUY NOW</button>
            </th>
          </tr>
        </thead>
      </table>

      <div className="bh">
        <h1 className="bh1">FREE TRIALS</h1>
      </div>

      <div className="bic">
        <div className="row bic1">
          <div className="col-4">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/22ae2a86-60e9-4de3-9180-678f40b69eb0.png"
              alt=""
              className="bicimg1"
            />
            <div className="btnbic1">
              <button className="bicbtn1">START A FREE TRIAL</button>
            </div>
          </div>
          <div className="col-4">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/vm/2ce1e296-e894-4f65-9dc1-d6ed11c031ae.png"
              alt=""
              className="bicimg1"
            />
            <div className="btnbic1">
              <button className="bicbtn1">START A FREE TRIAL</button>
            </div>
          </div>
          <div className="col-4">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,ar_0.75,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/vm/1300abe0-318e-489c-8205-dc770cfe6e54.png"
              alt=""
              className="bicimg1"
            />
            <div className="btnbic1">
              <button className="bicbtn1">START A FREE TRIAL</button>
            </div>
          </div>
        </div>
      </div>
      <div className="color">
        <div>
          <div className="nic">
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
                      <h6 className="nich6">At-center group classes</h6>
                    </div>
                  </div>
                  <div className="nicimgd1">
                    <img
                      src="https://static.cure.fit/assets/images/orangeTick.png"
                      alt=""
                      className="nicimg2"
                    />
                    <div className="1nich6">
                      <h6 className="nich6">At-center group classes</h6>
                    </div>
                  </div>
                  <div className="nicimgd1">
                    <img
                      src="https://static.cure.fit/assets/images/orangeTick.png"
                      alt=""
                      className="nicimg2"
                    />
                    <div className="1nich6">
                      <h6 className="nich6">At-center group classes</h6>
                    </div>
                  </div>
                </div>
                <div className="nicc">
                  <h5 className="nicch5">Starting at ₹1250 / month</h5>
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
                          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/black2.png"
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
        </div>

        {/* new box */}
        <div className="nic">
          <div className="row nic1">
            <div className="col-6">
              <div className="-crsl">
                <div id="demo" class="carousel zoom" data-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        className="alimg1"
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"
                        alt="Los Angeles"
                        width="1100"
                        height="500"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        className="alimg2"
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/sku-card-widget/gold1.png"
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
                    <h6 className="nich6">All PRO gyms</h6>
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
                <div className="nicimgd1">
                  <img
                    src="https://static.cure.fit/assets/images/orangeTick.png"
                    alt=""
                    className="nicimg2"
                  />
                  <div className="1nich6">
                    <h6 className="nich6">
                      4 Sessions/month at ELITE gyms & group classesc
                    </h6>
                  </div>
                </div>
              </div>
              <div className="nicc">
                <h5 className="nicch5">Starting at ₹1250 / month</h5>
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
          </div>
        </div>

        {/* video */}
        <div className="bel">
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
                <h6 className="nich6">All PRO gyms</h6>
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
            <div className="nicimgd1">
              <img
                src="https://static.cure.fit/assets/images/orangeTick.png"
                alt=""
                className="nicimg2"
              />
              <div className="1nich6">
                <h6 className="nich6">
                  4 Sessions/month at ELITE gyms & group classesc
                </h6>
              </div>
            </div>
          </div>
          <div className="nicc">
            <h5 className="nicch5">Starting at ₹1250 / month</h5>
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
          <div className="vid">
            <video
              autoPlay
              loop
              src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1084,ar_2,q_auto:eco,dpr_1.25,vc_auto,f_auto/image/test/sku-card-widget/fitness_live.mp4"
              className="vid2"
            ></video>
          </div>
        </div>
      </div>

      <div className="mstimg">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1738:763/dpr_2/image/vm/a5077452-0ba1-469f-a9ab-3eb6429de7c2.png"
          alt=""
          className="ay"
        />
      </div>

      <div className="okdiv">
        <div className="row r1">
          <div className="col-6 ala">
            <div className="ps">CULT COMMUNITY</div>
            <h3 className="ph3">Be a part of the cult community</h3>
            <h5 className="ph5">Join the Facebook community today</h5>
            <h5 className="ph52"> JOIN NOW</h5>
          </div>

          <div className="col-6">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_700,ar_1.315,q_auto:eco,dpr_2,f_auto,fl_progressive/image/vm/246641e8-00d7-42f7-ac92-3207665e35f7.svg"
              alt=""
              className="pimg"
            />
          </div>
        </div>
      </div>

      <div className="fi">
        <div className="fid1">
          <h3 className="fih3">
            Loved by the fitness community. Join the cult!
          </h3>
          <div className="fid2">
            The best unified fitness platform. Energy meter and live workouts
            are a game changer
          </div>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,ar_2.98,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
            alt=""
            className="fiimg1"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,ar_3.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
            alt=""
            className="fiimg2"
          />
        </div>
      </div>

      <div className="ffterfit">
        <div className="row startrfit ">
          <div className="col-4">
            <img
              className="fimg1"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              alt=""
            />
          </div>
          <div className="col-2">
            <a href="">cult.fit for business</a>
          </div>
          <div className="col-2">
            <a href="">partner.fit</a>
          </div>
          <div className="col-2">
            <a href="">contact us</a>
          </div>
          <div className="col-2">
            <a href="">
              <img
                className="colapp"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="row startr">
          <div className="col-4">
            <p>
              At cult.fit, we make group workouts fun, daily food healthy &
              tasty, mental fitness easy with yoga & meditation, Medical &
              lifestyle care hassle-free.#BeBetterEveryDay
            </p>
          </div>
          <div className="col-2">
            <a href="">cult.fit franchise</a>
          </div>
          <div className="col-2">
            <a href="">blogs</a>
          </div>
          <div className="col-2">
            <a href="">privacy policy</a>
          </div>
          <div className="col-2">
            <a href="">
              <img
                className="colapp"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="row startr">
          <div className="col-4"></div>
          <div className="col-2">
            <a href="">corporate partnerships</a>
          </div>
          <div className="col-2">
            <a href="">security</a>
          </div>
          <div className="col-2">
            <a href="">cult bmi calculator</a>
          </div>
          <div className="col-2">
            <a href="">
              {/* <img
              className="colapp"
              src=""
              alt=""
            /> */}
            </a>
          </div>
        </div>
        <div className="row startr">
          <div className="col-4"></div>
          <div className="col-2">
            <a href="">cult pass network</a>
          </div>
          <div className="col-2">
            <a href="">careers</a>
          </div>
          <div className="col-2">
            <a href="">terms & conditions</a>
          </div>
          <div className="col-2">
            <a href="">
              <img className="colapp" src="" alt="" />
            </a>
          </div>
        </div>
        <div className="lastdivfit">
          <a href="">Related Searches</a>
          <div className="row">
            <div className="col-2">
              <a href="">Gym Near Me</a>
            </div>
            <div className="col-2">
              <a href="">Face Yoga</a>
            </div>
            <div className="col-2">
              <a href="">Healthy Recipes</a>
            </div>
            <div className="col-2">
              <a href="">Chest Exercises</a>
            </div>
            <div className="col-2">
              <a href="">Exercise To Reduce Belly Fat</a>
            </div>
            <div className="col-2">
              <a href="">Six Pack Workout</a>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <a href="">WorkoutYoga Postures for Beginners</a>
            </div>
            <div className="col-2">
              <a href="">Surya Namaskar for Beginners</a>
            </div>
            <div className="col-2">
              <a href="">Yoga For Stress Relief</a>
            </div>
            <div className="col-2">
              <a href="">Yoga Asanas</a>
            </div>
            <div className="col-2">
              <a href="">Meditation Music</a>
            </div>
            <div className="col-2">
              <a href=""></a>Pranayama
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <a href="">Bedtime Stories for Kids</a>
            </div>
            <div className="col-2">
              <a href="">Meditation in Hindi</a>
            </div>
            <div className="col-2">
              <a href="">Mindfulness Meditation</a>
            </div>
            <div className="col-2">
              <a href="">Yoga Nidra</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Mumbai</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Delhi</a>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <a href="">Gyms in Pune</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Hyderabad</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Chennai</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Jaipur</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Kolkata</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Ahmedabad</a>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <a href="">Gyms in Chandigarh</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Indore</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Coimbatore</a>
            </div>
            <div className="col-2">
              <a href="">Gyms in Bangalore</a>
            </div>
            <div className="col-2">
              <a href="">Belly Fat Loss Exercise</a>
            </div>
            <div className="col-2">
              <a href="">Weight Loss Exercise</a>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <a href="">Strength Training</a>
            </div>
            <div className="col-2">
              <a href="">Mobility Exercises</a>
            </div>
            <div className="col-2">
              <a href="">Kids Exercise</a>
            </div>
            <div className="col-2">
              <a href="">How to Lose Weight</a>
            </div>
            <div className="col-2">
              <a href="">HIIT Workout</a>
            </div>
            <div className="col-2">
              <a href="">Exercises for Toned Body</a>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <a href="">Core Exercises</a>
            </div>
            <div className="col-2">
              <a href="">Butt Exercises</a>
            </div>
            <div className="col-2">
              <a href="">Arm Workout at Home</a>
            </div>
            <div className="col-2">
              <a href="">Back Exercises at Home</a>
            </div>
            <div className="col-2">
              <a href="">Abs Workout at Home</a>
            </div>
            <div className="col-2">
              <a href="">Thigh Exercises</a>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <a href="">Fitness Glossary</a>
            </div>
            <div className="col-2">
              <a href="">Morning Exercise</a>
            </div>
            <div className="col-2">
              <a href="">Home Workouts</a>
            </div>
            <div className="col-2">
              <a href=""></a>
            </div>
            <div className="col-2">
              <a href=""></a>
            </div>
            <div className="col-2">
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fitness;
