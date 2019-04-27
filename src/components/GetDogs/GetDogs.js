import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/ducks/userReducer";
import axios from "axios";

class GetDogs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			dogs: []
		};
	}
	async componentDidMount() {
		//destructure get user function
		const { getUser } = this.props;
		//call function to get user info
		await getUser();
		//sets state into owner_id that i need to be put as the argument for my get dog's function
		this.setState({ id: this.props.userReducer.user.owner_id }, () => {
			//call axios to bring dog info
			axios
				.post(`/api/yourdogs`, {
					owner_id: this.state.id
				})
				.then(response => {
					this.setState({ dogs: response.data });
				});
		});
	}
	render() {
		console.log(this.state.id);
		console.log(this.state.dogs);
		const dogsDisplay = this.state.dogs.map(dog => {
			return (
				<div key={dog.id}>
					<p>{dog.name}</p>
					<p>{dog.sex}</p>
					<p>{dog.age}</p>
					<img src={dog.picture} />
				</div>
			);
		});
		return <div>{dogsDisplay}</div>;
	}
}
const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{ getUser }
)(GetDogs);
