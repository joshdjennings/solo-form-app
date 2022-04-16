import React, { useState, useEffect } from 'react';
import Search from './Search';
import SoloEntryForm from './SoloEntryForm';
import SoloList from './SoloList';

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

	const displayedSolos = () => {
		return solos.filter((s) => s.name.includes(search.toLowerCase()));
	};

	const addNewSolo = (soloData) => {
		const dataToSend = {
			...soloData,
			feedback: {
				memory: soloData.memory,
				tone: soloData.tone,
				technique: soloData.technique,
				musicianship: soloData.musicianship,
				comments: soloData.comments,
				rating: soloData.rating,
				outstanding: soloData.ouststanding,
				judge: soloData.judge,
			},
		};
		// delete dataToSend.frontUrl;
		// delete dataToSend.backUrl;

		const configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataToSend),
		};

		fetch('http://localhost:3005/solo_information', configObj)
			.then((r) => r.json())
			.then((solos) => setSolos((mUV) => [...mUV, solos]));
	};

	return (
		<section id="results">
			<h1>Results</h1>
			<br />
			<p>Here are the Results</p>

			<div>
				<SoloEntryForm addNewSolo={addNewSolo} />
				<br />
				<Search search={search} handleSearch={handleSearch} />
				<br />
				<SoloList solos={displayedSolos()} />
			</div>
		</section>
	);
}

export default Results;
