import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
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
    return (
      <div>
        {/* <form>
          <input className="name" onChange={e => this.onChangeHandlerName(e)} />
          <input className="age" onChange={e => this.onChangeHandlerAge(e)} />
          <input
            className="picture"
            onChange={e => this.onChangeHandlerPicture(e)}
          />
          <input
            className="breed"
            onChange={e => this.onChangeHandlerBreed(e)}
          />
          <input className="sex" onChange={e => this.onChangeHandlerSex(e)} />
         
        </form> */}
        DWIOQHDOQ
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

// export default connect(
//   mapStateToProps,
//   { makeNewDog }
// )(AddDog);

export default AddDog;
