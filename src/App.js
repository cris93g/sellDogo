import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
import LogIn from "./components/LogIn/LogIn";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						{/* <Header /> */}
						<LogIn />
						{routes}
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
