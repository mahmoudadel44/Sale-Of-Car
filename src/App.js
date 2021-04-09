import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import ServicesData from "./our services/ServicesData";
import PrepareData from "./Prepare/PrepareData";
import SaleForm from "./SaleForm/SaleForm";
const App = () => {
  return (
    <BrowserRouter>
      {" "}
      <div>
        <Header />
        <ServicesData />
        <PrepareData />
        <SaleForm />
      </div>
    </BrowserRouter>
  );
};

export default App;
