import React from "react";
import "./Information.css";
const InformationCard = ({ information }) => {
  return (
    <>
      {information.map((info) => (
        <div className="num1">
          <div className="num">
            <span>{info.infoNumber}</span>
          </div>
          <div className="text">
            <h6>{info.infoTitle}</h6>
            <p>{info.infoDesc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default InformationCard;
