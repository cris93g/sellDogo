import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class Dog extends Component {
	render() {
		console.log(dogs);
		let { dogs } = this.props;
		return <div>dsad</div>;
	}
}

export default connect(({ getYourDogs }) => ({ getYourDogs }))(Dog);
