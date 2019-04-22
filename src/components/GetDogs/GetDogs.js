import React, { Component } from "react";
import { connect } from "react-redux";
import { getYourDogs } from "../../redux/ducks/storeReducer";

class GetDogs extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getYourDogs();
  }
  render() {
    const { dogs } = this.props;
    console.log(dogs);
    return <div>get dogs</div>;
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getYourDogs }
)(GetDogs);
