import React, { Component } from "react";
import "./projects.css";
import "./home.css";

const Card = () => {
	return (
		<div className="card">
			<h1 className="card-title">Yahoo</h1>
		</div>
	);
};

class Projects extends Component {
	render() {
		return (
			<div className="main-page">
				<Card />
			</div>
		);
	}
}

export default Projects;
