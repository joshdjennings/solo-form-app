import React from 'react';

function Ratings({ solo: { id, name, title, rating } }) {
	return (
		<tr>
			<td>{name}</td>
			<td>{title}</td>
			<td>{rating}</td>
		</tr>
	);
}

export default Ratings;
