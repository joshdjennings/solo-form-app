import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SoloEntryForm from './SoloEntryForm';
import Results from './Results';
import SoloList from './SoloList';
import './App.css';

function App() {
	const [solos, setSolos] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('http://localhost:3005/solos')
			.then((res) => res.json())
			.then((data) => setSolos(data));
	}, []);

	// function handleSearch(event) {
	// 	return setSearch(event.target.value);
	// }

	// const displayedSolos = () => {
	// 	return solos.filter((s) => s.name.includes(search.toLowerCase()));
	// };
	// const addNewSolo = (soloData) => {
	// 	const dataToSend = {
	// 		...soloData,
	// 	};

	// 	const configObj = {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(dataToSend),
	// 	};

	// 	fetch('http://localhost:3005/solos', configObj)
	// 		.then((r) => r.json())
	// 		.then((solos) => setSolos((mUV) => [...mUV, solos]));
	// };
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/entryform">
					<SoloEntryForm
						solos={solos}
						// addNewSolo={addNewSolo}
					/>
				</Route>
				<Route path="/sololist">
					<SoloList
						solos={solos}
						// search={search}
						// handleSearch={handleSearch}
					/>
				</Route>
				<Route exact path="/results">
					<Results
						solos={solos}
						// search={search}
						// handleSearch={handleSearch}
						// displayedSolos={displayedSolos}
					/>
				</Route>

				<Route exact path="/">
					<Home />
				</Route>

				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>

			<h3>This is Located at the bottom of App.js</h3>
			<p>This a Footer on all pages</p>
		</div>
	);
}

export default App;
