import React from 'react';
// import Search from './Search';
// import Solo from './Solo';

function Results({ solo, soloRows }) {
	// const soloRows = solos.map((solo) => <Solo key={solo.id} solo={solo} />);

	return (
		<div>
			<section id="results">
				<h1>Results</h1>
				<p>Enter Search Below</p>
				{/* <Search /> */}

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
			</section>
			{/* <select>
				<option value="grapefruit">Grapefruit</option>
				<option value="lime">Lime</option>
				<option selected value="coconut">
					Coconut
				</option>
				<option value="mango">Mango</option>
			</select> */}
		</div>
	);
}

export default Results;
