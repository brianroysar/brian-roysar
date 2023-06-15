import React from "react";
import "./navbar.css"; // Import your custom CSS file if needed
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<button className="navbar-toggle"></button>
			<ul className="navbar-menu">
				<li className="navbar-item-BR">
					<Link className="nav-link" to="/">
						BR
					</Link>
				</li>
				<li className="navbar-item">
					<Link className="nav-link" to="/experience">
						EXPERIENCE
					</Link>
				</li>
				<li className="navbar-item">
					<Link className="nav-link" to="/projects">
						PROJECTS
					</Link>
				</li>

				<li className="navbar-item">
					<Link className="nav-link" to="/creative">
						CREATIVE
					</Link>
				</li>
				<li className="navbar-item">RESUME</li>
			</ul>
		</nav>
	);
};

export default Navbar;
