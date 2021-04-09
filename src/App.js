import React from "react";
import ServicesData from "./our services/ServicesData";
import PrepareData from "./Prepare/PrepareData";
import Header from "./Header/Header";
const App = () => {
  return (
    <div>
      <Header />
      <ServicesData />
      <PrepareData />
    </div>
  );
};

export default App;
