import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Home from "./home.js";
import Experience from "./Experience.js";
import NavBar from "./navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="whole-page">
					<NavBar />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/experience" element={<Experience />} />
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
