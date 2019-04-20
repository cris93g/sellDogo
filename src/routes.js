import React from "react";
import { Switch, Route } from "react-router-dom";

import AddDog from "./components/AddDog/AddDog";

export default (
  <Switch>
    <Route component={AddDog} exact path="/" />
  </Switch>
);
