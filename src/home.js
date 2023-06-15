import React, { Component } from "react";
import "./home.css";
import profile_pic from "./profilepic.jpg";
import Navbar from "./navbar.js";

class Home extends Component {
	render() {
		return (
			<div className="main-page">
				<div className="center-card">
					<img src={profile_pic} alt="Logo" className="profile-pic" />
					<div className="blurb-box">
						<h1 className="welcome-message"> Hi! My name is </h1>
						<h1 className="brian-roysar-name"> BRIAN ROYSAR </h1>
						<h1 className="blurb">
							Currently at UCLA pursuing a double major in Computer Science and
							Applied Mathematics. Lost in the cross-roads between my left and
							right brain.
						</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
