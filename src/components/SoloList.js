import React, { useState, useEffect } from 'react';
import Solo from './Solo';

function SoloList() {
	const [solos, setSolos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3005/solos')
			.then((res) => res.json())
			.then((data) => setSolos(data));
	}, []);

	const soloRows = solos.map((solo) => <Solo key={solo.id} solo={solo} />);
	const addNewSolo = (solos) => {
		const dataToSend = {
			...solos,
		};

		const configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataToSend),
		};

		fetch('http://localhost:3005/solos', configObj)
			.then((r) => r.json())
			.then((solos) => setSolos((mUV) => [...mUV, solos]));
	};

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
