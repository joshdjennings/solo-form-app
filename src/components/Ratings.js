import React from 'react';

function Ratings({ solo: { name, title, rating } }) {
	return (
		<tr>
			<td>{name}</td>
			<td>{title}</td>
			<td>{rating}</td>
		</tr>
	);
}

export default Ratings;
