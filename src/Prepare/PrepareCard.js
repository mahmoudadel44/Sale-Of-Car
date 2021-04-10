import React from "react";

const PrepareCard = ({ preparesdata }) => {
  return (
    <div className="col-md-6 col-sm-12">
      <ul>
        <li>{preparesdata.prepareStep}</li>
      </ul>
    </div>
  );
};

export default PrepareCard;
