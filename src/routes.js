import React from "react";
import { Switch, Route } from "react-router-dom";

import AddDog from "./components/AddDog/AddDog";
import GetDogs from "./components/GetDogs/GetDogs";

export default (
  <Switch>
    <Route component={AddDog} exact path="/" />
    <Route component={GetDogs} exact path="/dogs" />
  </Switch>
);
