import React from 'react';
import Ratings from './Ratings';

function Results({ solos }) {
	const soloRows = solos.map((solo) => <Ratings key={solo.id} solo={solo} />);

	return (
		<div>
			<section id="results">
				<h1>Results</h1>
			</section>
			<table className="table table-striped table-dark">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Title</th>
						<th scope="col">Rating</th>
					</tr>
				</thead>
				<tbody>{soloRows}</tbody>
			</table>
		</div>
	);
}

export default Results;
