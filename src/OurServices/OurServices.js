import React from "react";
import "./OurServices.css";
import OurServicesCard from "./OurServicesCard";

const OurServices = ({ services }) => {
  return (
    <section className="services">
      <div className="container">
        <h1 className="text-center pt-3">Why use our services?</h1>
        <p className="lead text-center">
          We operates 24 hour/7 day-a-week telephone, email & remote support
          services that is staffed to handle any issue or question{" "}
        </p>
        <div className="row justify-content-around">
          {services?.map((service) => (
            <div className="col-md-4 col-sm-12 py-5">
              <OurServicesCard servicesdata={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
