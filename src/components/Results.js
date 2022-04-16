import React, { useState, useEffect } from 'react';
import Search from './Search';
// import SoloCollection from './SoloPage';

function Results() {
	const [solos, setSolos] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('http://localhost:3005/solo_information')
			.then((res) => res.json())
			.then((solos) => setSolos(solos));
	}, []);

	function handleSearch(event) {
		return setSearch(event.target.value);
	}

	// const displayedSolos = () => {
	// 	return solos.filter((s) => s.name.includes(search.toLowerCase()));
	// };

	return (
		<section id="results">
			<h1>Results</h1>
			<p>Here are the Results</p>

			<Search search={search} handleSearch={handleSearch} />
			{/* <SoloCollection solos={displayedSolos} /> */}
		</section>
	);
}

export default Results;
