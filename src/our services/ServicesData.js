import React from "react";
import OurServices from "../our services/OurServices";
const data = [
  {
    id: 1,
    serviceTitle: "Easy Process",
    serviceDescription:
      "We help you save time and effort. We master how to sell a car privately and have simplified the process of selling a vehicle to make it hassle-free.",
    serviceImg: <i class="fab fa-accessible-icon fa-2x"></i>,
  },
  {
    id: 2,
    serviceTitle: "Get The Best Return",
    serviceDescription:
      "Get the most money for your car. Reach serious buyers. Avoid lowball offers. Use our valuation tools for a better price when selling your car.",
    serviceImg: <i class="fab fa-accessible-icon fa-2x"></i>,
  },
  {
    id: 3,
    serviceTitle: "Dedicated Team",
    serviceDescription:
      "Our seller experts are here to help you at every step of the way via email, phone, or chat all the week days! They help you find real buyers for your car and finalize your deal fast.",
    serviceImg: <i class="fab fa-accessible-icon fa-2x"></i>,
  },
];

const ServicesData = () => {
  console.log("data", data);
  return <OurServices services={data} />;
};

export default ServicesData;
