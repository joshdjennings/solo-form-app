import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SoloEntryForm from './SoloEntryForm';
import Results from './Results';
import './App.css';

function App() {
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

	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/entryform">
					<SoloEntryForm
						solos={solos}
						search={search}
						handleSearch={handleSearch}
					/>
				</Route>

				<Route exact path="/results">
					<Results solos={solos} search={search} handleSearch={handleSearch} />
				</Route>

				<Route exact path="/">
					<Home />
				</Route>

				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>

			<h1>More info</h1>
			<p>Down Here is going to be more information</p>
		</div>
	);
}

export default App;
