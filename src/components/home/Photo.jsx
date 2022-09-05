import React from "react";
import "./home.css";

const Photo = (props) => {
  return (
    <div>
      <div className="row ">
        <img className={props.class} src={props.imgurl} alt="" />
      </div>
    </div>
  );
};

export default Photo;
