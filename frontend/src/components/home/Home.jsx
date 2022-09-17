import React from "react";
import Card from "./Card";
import axios from "axios";
import Photo from "./Photo";
import Demo from "./Demo";
import Type from "./Type";

import "./home.css";
import Navbar from "../header/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="top">
        <video
          className="video"
          width="750"
          height="500"
          autoplay="true"
          loop="true"
          playsinline=""
        >
          <source
            src="https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1600,ar_1.77,q_auto:eco,dpr_1.25,vc_auto,f_auto/video/test/we-are-cult-web.mp4"
            type="video/mp4"
          />
        </video>

        <img
          className="gredi"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/videoGradientDesktopV2.png"
          alt=""
        />
        <div className="center">
          <div>
            <img
              className="homelogo"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,ar_2.13,q_auto:eco,dpr_1.25,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-inset="700"
          data-aos-duration="3000"
          data-aos-easing="ease-in-sine"
        >
          <div>
            <svg
              className="svg1"
              width="998"
              height="399"
              viewBox="0 0 998 399"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Path 5"
                opacity="0.658748"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M998 398.116C998 398.116 901.882 207.384 619.882 240.987C337.882 274.59 85.3818 0.0878906 85.3818 0.0878906L0.881775 111.308C0.881775 111.308 312.882 361.673 605.882 291.154C898.882 220.636 993.5 398.116 993.5 398.116H998Z"
                fill="url(#paint0_linear_6391_14873)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_6391_14873"
                  x1="76.9999"
                  y1="123.5"
                  x2="418.867"
                  y2="699.423"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#62B1F2" stop-opacity="0"></stop>
                  <stop
                    offset="0.582702"
                    stop-color="#2BF2FF"
                    stop-opacity="0.74"
                  ></stop>
                  <stop offset="1" stop-color="#A9F7D1"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <svg
                className="svg2"
                width="1033"
                height="256"
                viewBox="0 0 1033 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Path 6"
                  opacity="0.658748"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1032.26 105.178C1032.26 105.178 831.789 -99.4979 605.32 63.0676C378.851 225.633 15.1793 107.411 15.1793 107.411L0.750166 243.722C0.750166 243.722 403.2 312.882 619.696 113.14C836.191 -86.6017 1029.23 106.835 1029.23 106.835L1032.26 105.178Z"
                  fill="url(#paint0_linear_6391_14874)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_6391_14874"
                    x1="-27"
                    y1="140"
                    x2="768.964"
                    y2="587.997"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#111D27" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="#FBD94C"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <svg
                  className="svg3"
                  width="906"
                  height="569"
                  viewBox="0 0 906 569"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Path 3"
                    opacity="0.815929"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.541494 567.256C0.541494 567.256 288.184 599.186 412 357.019C535.815 114.851 905.7 128.198 905.7 128.198L853.178 0.542129C853.178 0.542129 460.098 56.1967 363 327.202C265.902 598.207 2.44773 564.478 2.44773 564.478L0.541494 567.256Z"
                    fill="url(#paint0_linear_6391_14875)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_6391_14875"
                      x1="896.553"
                      y1="577.97"
                      x2="66.1909"
                      y2="486.524"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#111D27" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="#EC4ED1"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div>
                  <svg
                    className="svg4"
                    width="1027"
                    height="281"
                    viewBox="0 0 1027 281"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Path 4"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.499904 107.489C0.499904 107.489 79.4999 216.344 436 89.0315C792.5 -38.2805 965.255 280.41 965.255 280.41L1026.54 215.707C1026.54 215.707 708 -124.891 397 51.6425C85.9999 228.176 47.9999 89.0315 47.9999 89.0315L0.499904 107.489Z"
                      fill="url(#paint0_linear_6391_14872)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_6391_14872"
                        x1="604.206"
                        y1="548.044"
                        x2="260.146"
                        y2="17.1812"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#111D27" stop-opacity="0"></stop>
                        <stop offset="1" stop-color="#FBD94C"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="homeh1">
              <h1>A fitness movement that is worth breaking a sweat for</h1>
            </div>
            <div className="homebtn">
              <h5 className="hbtn2">EXPLORE CULTPASS</h5>
            </div>
          </div>
        </div>
        <div>
          <div data-aos="zoom-in-up">
            <img
              className="erro"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_22,ar_2,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/Path.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Card
        href="/"
        name="cultpass"
        imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,ar_3.59,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
        heading="Unlimited access to group classes, all gyms and at-home workouts"
      />
      <Card
        href="/fitness"
        name="cultpass"
        imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,ar_2.63,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
        heading="Unlimited access to all PRO gyms and at-home workouts"
      />

      <Card
        href="/fitness"
        name="cultpass"
        imgsrc="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_85,ar_2.86,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-live-partial-4x.png"
        heading="Unlimited access to at-home workouts with calorie tracking"
      />

      <div
        data-aos="fade-down-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-center"
      >
        <img
          className="ianimate"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.488,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
          alt=""
        />
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="3000">
        <h1 className="h1">One membership for all your fitness needs</h1>
      </div>
      <div
        data-aos="fade-up-right"
        data-aos-duration="3000"
        data-aos-anchor-placement="top-center"
      >
        <img
          className="ianimate1"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.404,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png"
          alt=""
        />
      </div>

      <div>
        <div data-aos="zoom-out-down" data-aos-duration="3000">
          <img
            className="anim1"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.488,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png"
            alt=""
          />
        </div>
        <div data-aos="zoom-out-down" data-aos-duration="3000">
          <img
            className="anim2"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.29,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png"
            alt=""
          />
        </div>
        <div data-aos="zoom-out-down" data-aos-duration="3000">
          <img
            className="anim3"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,ar_1.123,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_5.png"
            alt=""
          />
        </div>
      </div>

      <div>
        <div
          data-aos="flip-left"
          data-aos-anchor="#example-anchor"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Photo
            class="p1"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-1.png"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-anchor="#example-anchor"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Photo
            class="p2"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
          />
        </div>
        <div
          data-aos="fade-up-right"
          data-aos-anchor="#example-anchor"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Photo
            class="p2"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-2.png"
          />
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-anchor="#example-anchor"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Photo
            class="p3"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-3.png"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-anchor="#example-anchor"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Photo
            class="p4"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Photo
            class="p5"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-4.png"
          />
        </div>
        <div
          data-aos="flip-right"
          data-aos-anchor="#example-anchor"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Photo
            class="p6"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-5.png"
          />
        </div>
        <div
          data-aos="flip-down"
          data-aos-anchor="#example-anchor"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <Photo
            class="p7"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-6.png"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor="#hello-anchor"
          // data-aos-duration="infinite"
          data-aos-duration="2000"
        >
          <Photo
            class="p8"
            imgurl="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_200,ar_0.84,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/trainer-parallax/tile-7.png"
          />
        </div>
      </div>
      <div className="headd">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_259,ar_3.811,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cult-pass.svg"
          alt=""
        />
        <div className="fitli">
          <a href="/fitness">Link</a>
        </div>
      </div>
      <Demo />
      <Type />
      <div>
        <div className="row tip">
          <div className="col6 tipc1">
            <div className="eq">
              <h1>Wellness Hub</h1>
              <h4>One place for all your well-being needs</h4>
            </div>
            <div className="enda">
              <a href="">WORKOUT GEAR</a>
              <a href="">LABS</a>
              <a href="">THERAPY</a>
            </div>
          </div>
          <div className="col-6">
            <div className="row end">
              <div className="col-3">
                <a href="">
                  <img
                    className="imgr1"
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,ar_1.6,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy1.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-3">
                <a href="">
                  <img
                    className="imgr2"
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,ar_1.6,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy2.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="row tip1">
              <div className="col-3">
                <a href="">
                  <img
                    className="imgr3"
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,ar_1.6,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy3.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-3">
                <a href="">
                  <img
                    className="imgr4"
                    src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_276,ar_1.6,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/wellness-widget/therapy_desk/therapy4.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fash">
        <div>
          <div className="hh">
            <h2 className="h1s">Download the most loved fitness app</h2>
            <h6 className="h6">
              Start your fitness journey with us. Join the cult!
            </h6>
          </div>
          <div className="applelogo">
            <a href="">
              <img
                className="im1"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,ar_2.98,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
                alt=""
              />
            </a>
          </div>
          <div className="playlogo">
            <a href="">
              <img
                className="im2"
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,h_50,ar_3.31,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="next">
        <h1 className="n1">Join the cult family</h1>
      </div>
      <div>
        <div className="row nr">
          <a className="na1" href="">
            <div className="col-6">
              <h1 className="nh11">Careers at Cult</h1>
              <div className="nd1">
                <a className="na2" href="">
                  <button className="nbtn1">LEARN MORE</button>
                </a>
              </div>
            </div>
          </a>
          <a className="na2" href="">
            <div className="col-6">
              <h1 className="nh12">cult.fit franchise opportunities</h1>
              <h5 className="nh5">
                Partner with the largest fitness brand in India
              </h5>
              <div className="nd2">
                <a className="na2" href="">
                  <button className="nbtn2">LEARN MORE</button>
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="mtxt">
        <div className="mimg">
          <img
            className="iiimg "
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1000,ar_2.16,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/we_are_cult_new.svg"
            alt=""
          />
        </div>
        <div className="txt">
          <h3>
            At cult.fit, we make group workouts fun, daily food healthy & tasty,
            mental fitness easy with yoga & meditation, and medical & lifestyle
            care hassle-free.
          </h3>
          <h3> #BeBetterEveryDay</h3>
        </div>
      </div>

      {/* Footer */}
      <div className="ffterhome">
        <div className="row startr">
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
        <div className="row startr1">
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
        <div className="row 1">
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
        <div className="row startr1">
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
        <div className="lastdivhome">
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

export default Home;
