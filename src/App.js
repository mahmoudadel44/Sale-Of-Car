import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ServicesData from "./our services/ServicesData";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={ServicesData}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
