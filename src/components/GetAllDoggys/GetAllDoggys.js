import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllDogs } from "../../redux/ducks/storeReducer";
import axios from "axios";

class GetAllDoggys extends Component {
	componentDidMount() {
		this.props.getAllDogs();
	}
	render() {
		// const { allDogs } = this.props.storeReducer.dogs;
		console.log(this.props.storeReducer);
		return <div>getall</div>;
	}
}
const mapStateToPros = state => state;

export default connect(
	mapStateToPros,
	{ getAllDogs }
)(GetAllDoggys);
