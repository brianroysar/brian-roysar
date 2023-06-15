import React, { Component } from "react";
import "./Experience.css";
import "./home.css";

const Card = () => {
	return (
		<div className="card">
			<div className="left">
				<h1 className="card-title">Yahoo</h1>
				<h3 className="card-date"> June 2023 - Present </h3>
			</div>
			<div className="right">
				<h3 className="card-role">Software Engineering Intern</h3>
				<h3 className="card-desc">Working on the ads team</h3>
				<h3 className="card-tech">C++</h3>
			</div>
		</div>
	);
};

class Experience extends Component {
	render() {
		return (
			<div className="main-page">
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

export default Experience;
