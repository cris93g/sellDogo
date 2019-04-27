import React from "react";
import { Switch, Route } from "react-router-dom";

import AddDog from "./components/AddDog/AddDog";
import GetDogs from "./components/GetDogs/GetDogs";
import Home from "./Pages/Home/Home";

export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={AddDog} exact path="/adddogs" />
		<Route component={GetDogs} exact path="/dogs" />
	</Switch>
);
