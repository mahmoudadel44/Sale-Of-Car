import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Information from "./information/Information";
import SaleForm from "./SaleForm/SaleForm";
import ServicesData from "./Our Services/ServicesData";
import PrepareData from "./Prepare/PrepareData";
import Documentation from "./Documentaion/Documentation";
const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <div>
        <Header />
        <Information />
        <SaleForm />
        <ServicesData />
        <PrepareData />
        <Documentation />
      </div>
    </BrowserRouter>
  );
};

export default App;
