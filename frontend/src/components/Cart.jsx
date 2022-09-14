import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../components/store/cart.css";
import Storenav from "./store/Storenav";
import { DLT } from "../redux/actions/action";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const [prize, setPrize] = useState("0");
  console.log(prize);

  const history = useNavigate();
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);
  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let prize = 0;
    getdata.map((e) => {
      prize = e.prize + prize;
    });
    setPrize(prize);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Storenav />

      {getdata.length ? (
        <>
          <div
            style={{ background: " white ", color: "black" }}
            className="clearfix style-prefix-1ytu7n5"
          >
            <div id="snackbar-general">
              <div className="center-div">
                <p style={{ margin: 0 }} />
              </div>
            </div>
            <div>
              <section className="checkout-page">
                <div id="ppoo" className="container">
                  <div id="kil" style={{ width: "50%" }} className="row">
                    {getdata.map((e) => {
                      return (
                        <>
                          <div id="ttttt" className="col-lg-12">
                            <div
                              className="checkout-summary-widget"
                              id="gear-cart"
                              data-gtm-vis-recent-on-screen-60147862_136={283}
                              data-gtm-vis-first-on-screen-60147862_136={283}
                              data-gtm-vis-total-visible-time-60147862_136={100}
                              data-gtm-vis-has-fired-60147862_136={1}
                            >
                              <div className="gear-cart-item">
                                <div className="style-prefix-tr0r3x">
                                  <div className="style-prefix-171qv4g">
                                    <div className="style-prefix-z3oc7s">
                                      <img
                                        id="ii1"
                                        src={e.imgsrc}
                                        alt=""
                                        style={{ borderRadius: 10 }}
                                      />
                                    </div>
                                    <div className="style-prefix-190oc8g">
                                      <div className="style-prefix-1d4sgiw">
                                        <div className="style-prefix-1k9h66n">
                                          CULTSPORT
                                        </div>
                                        <div className="style-prefix-ceorb">
                                          <div className="style-prefix-jtzl24">
                                            {e.about}
                                          </div>
                                        </div>
                                        <div className="style-prefix-1im2vgb">
                                          Size: UK4
                                        </div>
                                        <div className="style-prefix-49ww5q">
                                          ₹ {e.prize}
                                        </div>
                                      </div>
                                      <div
                                        style={{
                                          width: 80,
                                          paddingTop: 12,
                                          color: "rgb(0, 0, 0)",
                                        }}
                                      >
                                        <div className="style-prefix-cv2pe">
                                          <img
                                            className="minus-sign"
                                            src="https://static.cure.fit/assets/images/minus.svg"
                                          />
                                          <div className="quantity-bought">
                                            {e.qnty}
                                          </div>
                                          <img
                                            className="plus-sign"
                                            src="https://static.cure.fit/assets/images/plus.svg"
                                          />
                                        </div>
                                      </div>
                                      <div className="style-prefix-1xu3tth" />
                                      <div className="error" />
                                    </div>
                                    <img
                                      onClick={() => dlt(e.id)}
                                      alt=""
                                      id="ppppp"
                                      src="https://static.cure.fit/assets/images/modal-close.svg"
                                      width={10}
                                      height={10}
                                      style={{ alignSelf: "flex-start" }}
                                    />
                                    <div className="seperator" />
                                  </div>
                                  <div />
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}

                    {/* next */}
                    <div id="popo" className="col-lg-12 padding0-md">
                      <div
                        id="checkout-option-container"
                        className="style-prefix-1y89ggi"
                        data-gtm-vis-recent-on-screen-60147862_142={59}
                        data-gtm-vis-first-on-screen-60147862_142={59}
                        data-gtm-vis-total-visible-time-60147862_142={100}
                        data-gtm-vis-has-fired-60147862_142={1}
                      >
                        <div>
                          <div className="checkout-delivery-container">
                            <div className="row rowpp-gradient-line margin0">
                              <div className="col-xs-1 col-md-1">
                                <img
                                  src="https://static.cure.fit/assets/images/locationPink.svg"
                                  alt=""
                                  className="checkout-icon"
                                />
                              </div>
                              <div className="col-xs-11 col-md-11">
                                <div className="row col-xs-12 col-md-12">
                                  <div className="checkout-address-container">
                                    <div className="row">
                                      <div className="col-xs-12">
                                        <div className="checkout-delivery-address-title" />
                                      </div>
                                      <div className="col-xs-12">
                                        <div className="checkout-delivery-selected-address-container">
                                          <div className="checkout-delivery-selected-address multiline">
                                            Please add address
                                          </div>
                                          <div className="primary-color">
                                            Add/Modify{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="line-separator" />
                        </div>
                        <div className="checkout-price-detail-container">
                          <div>
                            <div className="checkout-price-detail-cell">
                              <p>Total Price</p>
                              <p className="jkjk">₹ 4999</p>
                            </div>
                          </div>
                          <div>
                            <div className="checkout-price-detail-cell">
                              <p>(-) Discount</p>
                              <p className="jkjkl">₹ 2000</p>
                            </div>
                          </div>
                          <div>
                            <div className="checkout-price-detail-last-cell">
                              <p>Total Payable</p>
                              <p className="jkjkl1">₹ {prize}</p>
                            </div>
                          </div>
                        </div>
                        <div className="checkout-button-container">
                          <button className="btn checkout-proceed-button">
                            Select Address
                          </button>
                        </div>
                        <div className="style-prefix-y8xxr9">
                          <div className="coupons-container">
                            <div className="coupons-redemption-container full-width">
                              <form className="coupon-redemption-form topZero">
                                <div>
                                  <div>
                                    <div
                                      className="grecaptcha-badge"
                                      data-style="bottomright"
                                      style={{
                                        width: 256,
                                        height: 60,
                                        display: "block",
                                        transition: "right 0.3s ease 0s",
                                        position: "fixed",
                                        bottom: 14,
                                        right: "-186px",
                                        boxShadow: "gray 0px 0px 5px",
                                        borderRadius: 2,
                                        overflow: "hidden",
                                      }}
                                    >
                                      <div className="grecaptcha-logo">
                                        <iframe
                                          title="reCAPTCHA"
                                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcxaykhAAAAAJOA1e5XPAACY_KrXZmTiDR_0CL5&co=aHR0cHM6Ly9jdWx0c3BvcnQuY29tOjQ0Mw..&hl=en&type=image&v=g8G8cw32bNQPGUVoDvt680GA&theme=light&size=invisible&badge=bottomright&cb=do5sv2qbgrly"
                                          width={256}
                                          height={60}
                                          role="presentation"
                                          name="a-7e14xqdvgy8z"
                                          frameBorder={0}
                                          scrolling="no"
                                          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                                        />
                                      </div>
                                      <div className="grecaptcha-error" />
                                      <textarea
                                        id="g-recaptcha-response"
                                        name="g-recaptcha-response"
                                        className="g-recaptcha-response"
                                        style={{
                                          width: 250,
                                          height: 40,
                                          border:
                                            "1px solid rgb(193, 193, 193)",
                                          margin: "10px 25px",
                                          padding: 0,
                                          resize: "none",
                                          display: "none",
                                        }}
                                        defaultValue={""}
                                      />
                                    </div>
                                    <iframe style={{ display: "none" }} />
                                  </div>
                                </div>
                                <div
                                  id="opopop"
                                  className="coupon-code-row full-width "
                                >
                                  <input
                                    type="text"
                                    className="coupon-code-input"
                                    placeholder="Enter voucher code here"
                                    required=""
                                    defaultValue=""
                                  />
                                  <button
                                    color="primary"
                                    type="submit"
                                    disabled=""
                                    className="style-prefix-15hpq19"
                                  >
                                    CHECK VALIDITY
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="bottom-container" />
              </section>
            </div>
          </div>
        </>
      ) : (
        <div className="kkll">CART IS EMPTY</div>
      )}
    </>
  );
}

export default Cart;
