import React from "react";
import "./home.css";
const Card = (props) => {
  return (
    <div id="flt">
      <div className="box">
        <div className="box1">
          <a href={props.href}>
            <div>
              <h1>cultpass</h1>
            </div>
            <div className="boximg1">
              <img className="imgc" src={props.imgsrc} alt="" />
            </div>

            <div>{props.heading}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
