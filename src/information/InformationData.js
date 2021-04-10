import React from "react";
import InformationCard from "./InformationCard";
const data = [
  {
    id: 1,
    infoNumber: "1",
    infoTitle: "Submit Your Car",
    infoDesc: "Enter your car details for inspection on Emirates Auction.",
  },
  {
    id: 2,
    infoNumber: "2",
    infoTitle: "Receive Valuation and Offer",
    infoDesc:
      "  We will check your car and provide you with approved purchaseprice.",
  },
  {
    id: 3,
    infoNumber: "3",
    infoTitle: "Get Your Payment",
    infoDesc:
      "After a price is agreed for your car,we will exchange cash on a day that suits you.",
  },
];

const InformationData = () => {
  return <InformationCard information={data} />;
};

export default InformationData;
