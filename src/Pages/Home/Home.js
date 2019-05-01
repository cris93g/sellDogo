import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
// import Example from "../../components/ButtonAppBar/ButtonAppBar";

import AddDog from "../../components/AddDog/AddDog";
import Header from "../../components/Header/Header";

import "./Home.scss";
class Home extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="bodybanner" />
				<Header />
			</div>
		);
	}
}

export default Home;
