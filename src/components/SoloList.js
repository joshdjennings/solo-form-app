import React from 'react';
import Solo from './Solo';

function SoloList({ solos }) {
	const soloRows = solos.map((solo) => <Solo key={solo.id} solo={solo} />);

	return (
		<div>
			<br />
			<br />
			<br />
			<table className="table table-striped table-dark">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Title</th>
						<th scope="col">Instrument</th>
						<th scope="col">Edit</th>
					</tr>
				</thead>
				<tbody>{soloRows}</tbody>
			</table>
		</div>
	);
}

export default SoloList;
