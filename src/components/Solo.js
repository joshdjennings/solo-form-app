import React from 'react';

function Solo({ solo: { name, title, instrument } }) {
	return (
		<tr>
			<td>{name}</td>
			<td>{title}</td>
			<td>{instrument}</td>
		</tr>
	);
}

export default Solo;
