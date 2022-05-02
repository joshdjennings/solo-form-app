import React from 'react';
import Search from './Search';
import Ratings from './Ratings';

function Results({ solos }) {
	const soloRows = solos.map((solo) => <Ratings key={solo.id} solo={solo} />);

	return (
		<div>
			<section id="results">
				<h1>Results</h1>
				<p>Enter Search Below</p>
				<Search />
				<button type="button" className="btn btn-primary">
					Search
				</button>

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
			</section>
		</div>
	);
}

export default Results;
