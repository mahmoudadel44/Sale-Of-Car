import React from "react";
import "../styles/OurServices.css";
import OurServicesCard from "./OurServicesCard";
const OurServices = ({ services }) => {
  console.log("services", services);
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          {services?.map((service) => (
            <div className="col-md-4 text-center py-5">
              <OurServicesCard servicesdata={service} key={service.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
