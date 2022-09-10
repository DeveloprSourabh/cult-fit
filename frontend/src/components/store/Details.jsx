import React from "react";
import Cardapi from "./Cardapi";
import { useParams } from "react-router";

const Details = () => {
  const proid = useParams();
  const proDetail = Cardapi.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);
  return (
    <>
      <div style={{ background: "white", color: "black" }}>
        <div class="containerde">
          <div class="row">
            <div className="col-lg-4 ">
              <img src={product.img[0]} alt="" className="deimg1" />
              <img src={product.img[1]} alt="" className="deimg1" />
              <img src={product.img[2]} alt="" className="deimg1" />
            </div>
            <div className="col-lg-4">
              <img src={product.img[3]} alt="" className="deimg1" />
              <img src={product.img[4]} alt="" className="deimg1" />
              <img src={product.img[5]} alt="" className="deimg1" />
            </div>
            <div className="col-lg-4">
              <div className="dein">
                <div className="delg">CUTSPORT</div>
                <div className="detitle">{product.title}</div>
                <div>
                  <span className="deprize"> ₹ 1499</span>
                  <span className="depreprize">₹ 2499</span>
                  <span className="deoff">40% off</span>
                </div>
                <div className="desath">
                  <p className="dep1">
                    Your perfect training partner, this sports bra with its
                    hidden stabilizer panels promises extra support and bounce
                    control, especially during high impact activities. The power
                    mesh allows for better ventilation and the hook & eye
                    closure adds to your convenience while offering additional
                    adjustability. Time to be fit with FormFit!
                  </p>
                </div>
                <div className="desize">
                  <span className="dechoosesize1">Choose Size</span>
                  <span className="dechoosesize2">(Size Guide)</span>
                </div>
                <div className="desizepattern">
                  <div className="disable xs">XS</div>
                  <div className="xs">S</div>

                  <div className="xs">M</div>

                  <div className="xs">L</div>
                  <div className="xs">XL</div>
                </div>

                <div className="debtn">
                  <div className="debtn1">Add to Cart</div>
                  <div className="debtn1">Buy Now</div>
                </div>
                <div className="deprode">
                  <div className="hprode">PRODUCT DETAILS</div>
                  <ul className="deul">
                    <li className="deli">. Color: Black</li>
                    <li className="deli">. Padded</li>
                    <li className="deli">. High Impact</li>
                    <li className="deli">
                      . Detachable Straps For Criss Cross Option
                    </li>
                    <li className="deli">. Hook And Eye Closure</li>
                  </ul>
                  <div className="dehr"></div>
                  <div className="deinput">
                    <input
                      autofocus="autofocus"
                      placeholder="Enter your pincode"
                      type="number"
                      className="deinputde"
                    />
                  </div>
                  <div className="deul2">
                    <ul className="deul22">
                      <li className="deli2">. Free delivery within 5-7 days</li>
                      <li className="deli2">. Easy 30 days return available</li>
                      <li className="deli2">. 30 days exchange available</li>
                      <li
                        style={{
                          fontWeight: "700",
                          fontSize: "19px",
                          opacity: "100%",
                          lineHeight: "20px",
                        }}
                        className="deli2"
                      >
                        To minimise contact between you and the delivery
                        partner, Pay on Delivery option is temporarily disabled.
                      </li>
                    </ul>
                  </div>
                  <div className="line2"></div>
                  <div className="despi">Specifications</div>
                  <div className="delst">Country of Origin: Sri Lanka</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
