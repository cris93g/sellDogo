import React, { Component } from "react";
import { connect } from "react-redux";
import { makeNewDog } from "../../redux/ducks/storeReducer";

import axios from "axios";
import { Link } from "react-router-dom";

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
      user: {}
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
    this.setState({ descipt: e.target.value });
  }

  addADoggo() {
    this.props.makeNewDog(
      this.state.name,
      this.state.age,
      this.state.picture,
      this.state.breed,
      this.state.sex,
      this.state.user.owner_id,
      this.state.price,
      this.state.descript
    );
  }

  render() {
    console.log(this.state.descipt);
    return (
      <div>
        <form>
          <p>Dogs Name</p>
          <input className="name" onChange={e => this.onChangeHandlerName(e)} />
          <br />
          <p>Dogs AGE</p>
          <input className="age" onChange={e => this.onChangeHandlerAge(e)} />
          <br />
          <p>Dogs Picture</p>
          <input
            className="picture"
            onChange={e => this.onChangeHandlerPicture(e)}
          />
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
