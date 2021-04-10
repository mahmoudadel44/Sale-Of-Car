import React from "react";
import "./Information.css";
import InformationData from "./InformationData";
import Hammer from "../images/hammer.JPG";
const Information = () => {
  return (
    <section className="information">
      <div className="left-side">
        <div className="work">
          <h2>How it works?</h2>
          <span>Sell Your Car in Three Simple Steps</span>

          <div className="nums">
            <InformationData />
          </div>
        </div>
      </div>

      <div className="right-side text-center">
        <div className="overlay"></div>
        <div className="div_content">
          <div>
            <img src={Hammer} alt="Hammer" className="hammerImg" />
          </div>
          <div className="text">
            <h2 className="text-uppercase">Your car will be sold by bidding</h2>
            <p>
              You set the starting price it will be sold for the highest bidder{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
