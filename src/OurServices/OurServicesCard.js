import React from "react";
import "./OurServices.css";
const OurServicesCard = ({ servicesdata }) => {
  return (
    <div className="serviceDetails d-flex" key={servicesdata.id}>
      <div className="easyProcessImg d-flex">
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
