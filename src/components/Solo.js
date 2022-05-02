import React from 'react';

function Solo({ solo }) {
	const { name, title, instrument } = solo;

	return (
		<tr>
			<td>{name}</td>
			<td>{title}</td>
			<td>{instrument}</td>
		</tr>
	);
}

export default Solo;
