import React from 'react';
// import Solo from './Solo';
import Results from './Results';

function SoloList({ solos }) {
	const soloRows = solos.map((solo) => <Results />);

	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Title</th>
					<th scope="col">Instrument</th>
				</tr>
			</thead>
			<tbody>{soloRows}</tbody>
		</table>
	);
}

export default SoloList;
