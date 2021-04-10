import React from "react";
import "./PrepareCard";
import "./Prepare.css";
import PrepareCard from "./PrepareCard";
const Prepare = ({ prepares }) => {
  return (
    <section className="prepare p-5">
      <div className="container">
        <div className="text-center mb-3">
          <h2>Get prepared before our call</h2>
          <span>Required Documents & Procedures </span>
        </div>
        <div className="container">
          <div className="row required">
            {prepares?.map((prepare) => (
              <PrepareCard key={prepare.id} preparesdata={prepare} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prepare;
