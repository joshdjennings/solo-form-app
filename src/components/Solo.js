import React from 'react';
// import Results from './Results';

function Solo({ solo }) {
	const { name, title, instrument } = solo;

	return (
		<div>
			{/* <Results soloRows={soloRows} /> */}
			<tr>
				<td>{name}</td>
				<td>{title}</td>
				<td>{instrument}</td>
				<td>
					<button type="button" className="btn btn-primary">
						Edit Solo
					</button>
				</td>
			</tr>
		</div>
	);
}

export default Solo;
