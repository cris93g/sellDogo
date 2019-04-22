import React from "react";

import { connect } from "react-redux";
import Auth from "../Auth/Auth";
const LogIn = props => {
	console.log(props);

	return (
		<div>
			<Auth />
			<a href={process.env.REACT_APP_LOGIN}>
				<button>LOG IN</button>
			</a>
		</div>
	);
};
const mapStatetoProps = state => state;
export default connect(mapStatetoProps)(LogIn);
