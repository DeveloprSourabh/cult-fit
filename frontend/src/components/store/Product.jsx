import React from "react";
import "./store.css";
import { NavLink } from "react-router-dom";

function Product(props) {
  // console.log(props);

  return (
    <>
      <div key={props.id} className="stylishname">
        <span className="ghnt">{props.heading}</span>
        <div className="thik">{props.subheading}</div>
      </div>
      <div className="card">
        <div className="flex">
          <NavLink to={`/cultsport/${props.id}`}>
            <div className="makecard">
              <div className="cimg1">
                <img src={props.imgsrc} alt="" className="makecardimg" />
              </div>
              <div className="makecarddiv2">CULTSPORT</div>
              <div className="makecarddiv3">{props.about}</div>
              <div className="makecarddiv4">
                <p style={{ fontWeight: "600" }} className="makecardp">
                  ₹{props.prize}
                </p>
                <p
                  style={{ textDecoration: "line-through" }}
                  className="makecardp"
                >
                  ₹{props.preprize}
                </p>
                <p
                  style={{ color: "rgb(255 138 183)", fontWeight: "700" }}
                  className="makecardp"
                >
                  {props.off}% off
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Product;
