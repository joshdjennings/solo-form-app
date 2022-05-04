import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
	return (
		<nav>
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink to="/entryform">Solo Entry</NavLink>
			<NavLink to="/sololist">Solo List</NavLink>
			<NavLink to="/results">Results</NavLink>
		</nav>
	);
}

export default NavBar;
