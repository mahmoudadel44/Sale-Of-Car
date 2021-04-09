import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ServicesData from "./our services/ServicesData";
import Header from "./Header/Header";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ServicesData}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
