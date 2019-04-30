import React, { Component } from "react";
import { connect } from "react-redux";
import { makeNewDog } from "../../redux/ducks/storeReducer";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import axios from "axios";
import { Link } from "react-router-dom";
var config = {
	apiKey: "AIzaSyC3APZKh9pxpcXV6_pMoU_YZPJVb2R3kWU",
	authDomain: "eccomerce-7b26b.firebaseapp.com",
	databaseURL: "https://eccomerce-7b26b.firebaseio.com",
	projectId: "eccomerce-7b26b",
	storageBucket: "eccomerce-7b26b.appspot.com",
	messagingSenderId: "953854821130"
};

firebase.initializeApp(config);
class AddDog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: 1,
			picture: "",
			breed: "",
			sex: "",
			price: 0,
			descript: "",
			user: {},
			avatar: "",
			isUploading: false,
			progress: 0,
			avatarURL: ""
		};

		this.addADoggo = this.addADoggo.bind(this);
	}
	componentDidMount() {
		axios.get(`/me`).then(response => this.setState({ user: response.data }));
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
	onChangeHandlerPrice(e) {
		this.setState({ price: e.target.value });
	}
	onChangeHandlerDescription(e) {
		this.setState({ descript: e.target.value });
	}

	handleChangeUsername = event =>
		this.setState({ username: event.target.value });
	handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
	handleProgress = progress => this.setState({ progress });
	handleUploadError = error => {
		this.setState({ isUploading: false });
		console.error(error);
	};
	handleUploadSuccess = filename => {
		this.setState({ avatar: filename, progress: 100, isUploading: false });
		firebase
			.storage()
			.ref("images")
			.child(filename)
			.getDownloadURL()
			.then(url => this.setState({ avatarURL: url }));
	};

	addADoggo() {
		this.props.makeNewDog(
			this.state.name,
			this.state.age,
			this.state.avatarURL,
			this.state.breed,
			this.state.sex,
			this.state.user.owner_id,
			this.state.price,
			this.state.descript
		);
	}

	render() {
		console.log(this.state.avatarURL);
		return (
			<div>
				<form>
					<p>Dogs Name</p>
					<input className="name" onChange={e => this.onChangeHandlerName(e)} />
					<br />
					<p>Dogs AGE</p>
					<input className="age" onChange={e => this.onChangeHandlerAge(e)} />
					<br />

					{/* <p>Dogs Picture</p> */}
					{/* <input
						className="picture"
						onChange={e => this.onChangeHandlerPicture(e)}
          /> */}
					<form>
						{/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
					{this.state.avatarURL && <img src={this.state.avatarURL} />} */}
						<FileUploader
							accept="image/*"
							name="avatar"
							randomizeFilename
							storageRef={firebase.storage().ref("images")}
							onUploadStart={this.handleUploadStart}
							onUploadError={this.handleUploadError}
							onUploadSuccess={this.handleUploadSuccess}
							onProgress={this.handleProgress}
						/>
					</form>
					<br />
					<p>Dogs Breed</p>
					<input
						className="breed"
						onChange={e => this.onChangeHandlerBreed(e)}
					/>
					<br />
					<p>Dogs Sex</p>
					<input className="sex" onChange={e => this.onChangeHandlerSex(e)} />
					<br />
					<p>price</p>
					<input
						className="price"
						onChange={e => this.onChangeHandlerPrice(e)}
					/>
					<br />
					<p>Description</p>
					<input
						className="description"
						onChange={e => this.onChangeHandlerDescription(e)}
					/>
					<br />
					<button
						onClick={() => {
							this.addADoggo();
						}}
						className="submit-application"
					>
						Submit
					</button>
					<Link to="/dogs">
						<button>dogs</button>
					</Link>
				</form>
			</div>
		);
	}
}

// const mapStateToProps = state => state;

const mapStateToProps = state => {
	return {
		dogs: state.dogs,
		user: state.user
	};
};

export default connect(
	mapStateToProps,
	{ makeNewDog }
)(AddDog);
