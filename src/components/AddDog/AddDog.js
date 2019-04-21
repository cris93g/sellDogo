import React, { Component } from "react";
import { connect } from "react-redux";
import { makeNewDog } from "../../redux/ducks/storeReducer";

class AddDog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: 1,
			picture: "",
			breed: "",
			sex: ""
		};
		this.addADoggo = this.addADoggo.bind(this);
	}

	onChangeHandlerName(e) {
		this.setState({ name: e.target.value });
	}
	onChangeHandlerAge(e) {
		this.setState({ age: e.target.value });
	}
	onChangeHandlerPicture(e) {
		this.setState({ picture: e.target.value });
	}
	onChangeHandlerBreed(e) {
		this.setState({ breed: e.target.value });
	}
	onChangeHandlerSex(e) {
		this.setState({ sex: e.target.value });
	}

	addADoggo() {
		this.props.makeNewDog(
			this.state.name,
			this.state.age,
			this.state.picture,
			this.state.breed,
			this.state.sex
		);
	}

	render() {
		console.log(this.state);
		return (
			<div>
				<form>
					<p>Dogs Name</p>
					<input className="name" onChange={e => this.onChangeHandlerName(e)} />
					<p>Dogs AGE</p>
					<input className="age" onChange={e => this.onChangeHandlerAge(e)} />
					<p>Dogs Picture</p>
					<input
						className="picture"
						onChange={e => this.onChangeHandlerPicture(e)}
					/>
					<p>Dogs Breed</p>
					<input
						className="breed"
						onChange={e => this.onChangeHandlerBreed(e)}
					/>
					<p>Dogs Sex</p>
					<input className="sex" onChange={e => this.onChangeHandlerSex(e)} />
					<button
						onClick={() => {
							this.addADoggo();
						}}
						className="submit-application"
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

// const mapStateToProps = state => state;

const mapStateToProps = state => {
	return {
		dogs: state.dogs
	};
};

export default connect(
	mapStateToProps,
	{ makeNewDog }
)(AddDog);
