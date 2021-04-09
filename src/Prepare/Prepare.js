import React from "react";
import "./PrepareCard";
import "./Prepare.css";
import PrepareCard from "./PrepareCard";
const Prepare = ({ prepares }) => {
  return (
    <section class="prepare p-5">
      <div class="container">
        <div class="text-center mb-3">
          <h2>Get prepared before our call</h2>
          <span>Required Documents & Procedures </span>
        </div>
        <div className="container">
          <div class="row required">
            {prepares?.map((prepare) => (
              <PrepareCard id={prepare.id} preparesdata={prepare} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prepare;
