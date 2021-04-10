import React from "react";
import "./Documentation.css";
const Documentation = () => {
  return (
    <section className="documentation text-center">
      <div className="container">
        <h2 className="mb-3">Required Documentation</h2>
        <div className="row">
          <div className="col-4 mt-2">
            <h4>Emirates ID</h4>
          </div>
          <div className="col-4">
            <h4 className="mb-0">Possession certificate</h4>
            <span>(Dubai certificate or transfer to Dubai)</span>
          </div>
          <div className="col-4 mt-2">
            <h4>Bank account details</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
