import React, { Component } from "react";
import "./App.sass";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
import AddDog from "./components/AddDog/AddDog";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Header />
					<div className="App">
						<Header />
						<AddDog />
						{routes}
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
