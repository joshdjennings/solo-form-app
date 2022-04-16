import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink to="/entryform">Solo Entry</NavLink>
			<NavLink to="/judgeform">Judge's Form</NavLink>
			<NavLink to="/results">Results</NavLink>
			<NavLink to="/solopage">Solo Page</NavLink>
		</nav>
	);
}

export default NavBar;
