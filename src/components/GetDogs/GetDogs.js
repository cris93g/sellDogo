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
    await this.setState({ id: this.props.userReducer.user.owner_id });
    //call axios to bring dog info
    await axios
      .get(`/api/yourdogs`, {
        owner_id: this.state.id
      })
      .then(response => {
        this.setState({ dogs: response.data });
      });
  }
  render() {
    console.log(this.state.id);
    console.log(this.state.dogs);
    return <div>get dogs</div>;
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(GetDogs);
