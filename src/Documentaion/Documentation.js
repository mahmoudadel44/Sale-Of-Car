import React from "react";
import "./Documentation.css";
const Documentation = () => {
  return (
    <section class="documentation text-center">
      <div class="container">
        <h2 class="mb-3">Required Documentation</h2>
        <div class="row">
          <div class="col-4 mt-2">
            <h4>Emirates ID</h4>
          </div>
          <div class="col-4">
            <h4 class="mb-0">Possession certificate</h4>
            <span>(Dubai certificate or transfer to Dubai)</span>
          </div>
          <div class="col-4 mt-2">
            <h4>Bank account details</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
