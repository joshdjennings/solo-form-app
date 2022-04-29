import React from 'react';
// import Search from './Search';
import Solo from './Solo';

function Results({ solos }) {
	const soloRows = solos.map((solo) => <Solo key={solo.id} solo={solo} />);

	return (
		<div>
			<section id="results">
				<h1>Results</h1>
				<p>Enter Search Below</p>
				<select>
					<option value="name">Name</option>
					<option value="title">Title</option>
					<option defaultValue="instrument">Instrument</option>
				</select>
				{/* <Search /> */}

				<table className="table table-striped table-dark">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Title</th>
							<th scope="col">Instrument</th>
						</tr>
					</thead>
					<tbody>{soloRows}</tbody>
				</table>
			</section>
		</div>
	);
}

export default Results;
