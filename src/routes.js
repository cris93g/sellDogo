import React from "react";
import { Switch, Route } from "react-router-dom";

import AddDog from "./components/AddDog/AddDog";
import GetDogs from "./components/GetDogs/GetDogs";
import Home from "./Pages/Home/Home";
import Dog from "./components/Dog/Dog";
import { connect } from "react-redux";
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={AddDog} exact path="/adddogs" />
		<Route component={GetDogs} exact path="/dogs" />
		<Route
			exact
			path="/Dog/:id"
			component={connect(state => state)(props => {
				let {
					dogs,
					match: {
						params: { id }
					}
				} = props;
			})}
		/>
	</Switch>
);
