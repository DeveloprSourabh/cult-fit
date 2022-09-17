import React from "react";
import "./home.css";
const Card = (props) => {
  return (
    <div data-aos="zoom-in">
      <div>
        <div className="box">
          <div className="box1">
            <a href={props.href}>
              <div>
                <h6>cultpass</h6>
              </div>
              <div className="boximg1">
                <img className="imgc" src={props.imgsrc} alt="" />
              </div>

              <div>{props.heading}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
