import React from 'react';

function Ratings({ solo }) {
	const { name, title, rating } = solo;

	return (
		<tr>
			<td>{name}</td>
			<td>{title}</td>
			<td>{rating}</td>
		</tr>
	);
}

export default Ratings;
