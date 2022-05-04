import React from 'react';
import SoloCollection from './SoloCollection';

function SoloList({ solos }) {
	// const soloRows = solos.map((solo) => <Solo key={solo.id} solo={solo} />);

	return (
		<div>
			<section id="soloList">
				<h2>List of Entries</h2>
				{/* <table className="table table-striped table-dark">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Title</th>
							<th scope="col">Instrument</th>
						</tr>
					</thead>
					<tbody>{soloRows}</tbody>
				</table> */}
				<SoloCollection solos={solos} />
			</section>
		</div>
	);
}

export default SoloList;
