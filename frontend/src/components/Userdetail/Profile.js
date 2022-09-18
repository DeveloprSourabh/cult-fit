import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import "./user.css";
const Profile = () => {
  const [modal, setmodal] = useState(false);
  return (
    <>
      <Modal
        style={{ borderTop: "none", position: "absolute", left: "23rem " }}
        size="lg"
        isOpen={modal}
        toggle={() => setmodal(!modal)}
      >
        <ModalHeader
          style={{
            border: "none",
            background: "black",
            width: " fit-content",
            position: "absolute",
            left: "8rem",
            top: "3rem ",
            height: " 52rem",
          }}
          toggle={() => setmodal(!modal)}
        >
          <div className="r"></div>
          <div tabindex="-1" className="style-prefix-pbmsma">
            <div className="style-prefix-17k3sa9">
              <div className="style-prefix-4f0zv4">
                <div className="style-prefix-13owxp7">
                  <button type="button" className="close style-prefix-cztrox">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
                <div className="style-prefix-mfhl81">
                  <div className="style-prefix-a9b9gc">
                    <div className="style-prefix-1oskuwq">
                      <div
                        width="135"
                        height="118.42105263157896"
                        className=" style-prefix-nv16vk"
                      >
                        <div
                          width="135"
                          height="118.42105263157896"
                          className="style-prefix-0"
                        ></div>
                        <img
                          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_1.14,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman_with_cultsport_vertical.svg"
                          alt="cultsport logo"
                          className=" style-prefix-11pvsgi"
                          loading="lazy"
                          width="135"
                          height="118.42105263157896"
                        />
                      </div>
                    </div>
                    <div className="style-prefix-3r6lhh">
                      <div className="style-prefix-1bric4e">
                        <div className="style-prefix-1tx6twl">
                          <div className="style-prefix-ho29vo"></div>
                        </div>
                        <input
                          type="string"
                          placeholder="Enter your Full Name"
                          className="style-prefix-biiubo"
                        />
                      </div>
                      <div className="mt-3 style-prefix-1bric4e">
                        <div className="style-prefix-1tx6twl">
                          <div className="style-prefix-ho29vo"></div>
                        </div>
                        <input
                          type="number"
                          placeholder="+91  Enter your phone number"
                          min="0"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          className="style-prefix-biiubo"
                        />
                      </div>
                      <div className="mt-3 style-prefix-1bric4e">
                        <div className="style-prefix-1tx6twl">
                          <div className="style-prefix-ho29vo"></div>
                        </div>
                        <input
                          type="email"
                          placeholder="Enter your Email Adress"
                          className="style-prefix-biiubo"
                        />
                      </div>
                      <div className="mt-3 style-prefix-1bric4e">
                        <div className="style-prefix-1tx6twl">
                          <div className="style-prefix-ho29vo"></div>
                        </div>
                        <input
                          type="password"
                          placeholder="Enter your Password"
                          className="style-prefix-biiubo"
                        />
                      </div>
                      <div className="mt-3 style-prefix-1bric4e">
                        <div className="style-prefix-1tx6twl">
                          <div className="style-prefix-ho29vo"></div>
                        </div>
                        <input
                          type="number"
                          placeholder="Enter your Confirm Password"
                          className="style-prefix-biiubo"
                        />
                      </div>

                      <div className="style-prefix-1w1gazz">
                        <button
                          color="primary"
                          disabled=""
                          className="style-prefix-188z9di"
                        >
                          <div className="button_text style-prefix-1aygqmv">
                            {" "}
                            CONTINUE
                          </div>
                        </button>
                      </div>
                      <div className="style-prefix-qtcbab">
                        <button
                          color="secondary"
                          className="style-prefix-ozt8il"
                        >
                          <div className="button_text style-prefix-14wm3zd">
                            <div className="style-prefix-gg4vpm">
                              <div className="style-prefix-1ll0tyc">
                                Or connect with
                              </div>
                              <div className="style-prefix-7kp13n">
                                <img
                                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/login/google-login-white.svg"
                                  className="style-prefix-ue3i0g"
                                />
                                <img
                                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_24,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive//image/login/email-login-white.svg"
                                  className="style-prefix-ue3i0g"
                                />
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                      <div className="style-prefix-1ufk7oo">
                        <div className="style-prefix-1nl9jkz">
                          * By Continuing you agree to the{" "}
                          <a
                            href="https://static.cult.fit/terms_cult.html"
                            target="_blank"
                            rel="noreferrer"
                            className="style-prefix-r5qp1t"
                          >
                            Terms of Services
                          </a>{" "}
                          and{" "}
                          <a
                            href="https://static.cult.fit/privacy_cult.html"
                            target="_blank"
                            rel="noreferrer"
                            className="style-prefix-r5qp1t"
                          >
                            Privacy policy
                          </a>
                          .
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalHeader>
      </Modal>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <img id="tiku"
          onClick={() => setmodal(true)}
          src="https://static.cure.fit/assets/images/user-default.png"
          alt=""
        />
      </div>
    </>
  );
};

export default Profile;
