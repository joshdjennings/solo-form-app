import React from 'react';
import Solo from './Solo';

function SoloList({ solos }) {
	const soloRows = solos.map((solo) => <Solo key={solo.id} solo={solo} />);

	return (
		<div>
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
		</div>
	);
}

export default SoloList;
