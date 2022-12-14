import React from "react";
import { Link } from "react-router-dom";

const Subh = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav1">
          <div className="sub head">
            <a href="../fitness/cultpass-elite">
              <h6 className="hlink">cultpass ELITE</h6>
            </a>
          </div>
          <div className="sub head">
            <a href="../fitness/cultpass-live">
              <h6>cultpass LIVE</h6>
            </a>
          </div>
          <div className="sub head">
            <a href="../fitness/cult-transform">
              <h6>cult Transform</h6>
            </a>
          </div>
          <div className="btn">
            <Link to="./fitness/compare-plans">
              <h6>COMPARE PLANS</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subh;
