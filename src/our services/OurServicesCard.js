import React from "react";
import "../styles/OurServices.css";
const OurServicesCard = ({ servicesdata }) => {
  return (
    <div className="serviceDetails d-flex">
      <div className="easyProcessImg d-flex align-items-center">
        <div className="serviceImg mr-4">{servicesdata.serviceImg}</div>
      </div>
      <div className="d-flex flex-column titleWithDescription">
        <h6>{servicesdata.serviceTitle}</h6>
        <p className="descriptionService">{servicesdata.serviceDescription}</p>
      </div>
    </div>
  );
};

export default OurServicesCard;
