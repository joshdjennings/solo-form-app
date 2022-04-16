import React, { useState, useEffect, Container } from 'react';
import SoloCollection from './SoloCollection';

function SoloPage() {
	const [solo, setSolo] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3005/solo_information')
			.then((res) => res.json())
			.then((solo) => setSolo(solo));
	}, []);

	return (
		<Container>
			<h1>Solo List</h1>

			<SoloCollection solo={solo} />
		</Container>
	);
}

export default SoloPage;
