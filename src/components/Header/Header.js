import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getUser } from "../../redux/ducks/userReducer";

// HEADER IS CONNECTED, WILL PULL DATA TO SHOW ON PAGE LOAD

class Header extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props.userReducer.user);
    const { REACT_APP_LOGIN, REACT_APP_LOGOUT } = process.env;

    return (
      <header className="App-header">
        <Link to="/">Home</Link>

        {this.props.userReducer.user.username ? (
          <div>
            <a href={REACT_APP_LOGOUT}>Logout</a>
            <p>Welcome, {this.props.userReducer.user.username}</p>
          </div>
        ) : (
          <div>
            <a href={REACT_APP_LOGIN}>Login</a>
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Header);
