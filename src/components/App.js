import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SoloEntryForm from './SoloEntryForm';
import Results from './Results';
import SoloList from './SoloList';

function App() {
	const [solos, setSolos] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		fetch('http://localhost:3005/solos')
			.then((res) => res.json())
			.then((data) => setSolos(data));
	}, []);

	function handleSearch(event) {
		return setSearch(event.target.value);
	}

	const displayedSolos = () => {
		if (search === '') {
			return solos;
		}
		// return solos.filter((s) => s.name.includes(search.toLowerCase()));
	};

	return (
		<div
			className="App"
			style={{
				backgroundImage: 'url(/Drums.png)',
				backgroundRepeat: 'no-repeat',
				height: '100vh',
				backgroundSize: 'cover',
			}}
		>
			<NavBar />
			<Switch>
				<Route path="/entryform">
					<SoloEntryForm solos={solos} setSolos={setSolos} />
				</Route>
				<Route path="/sololist">
					<SoloList solos={displayedSolos()} />
				</Route>
				<Route path="/results">
					<Results solos={solos} search={search} handleSearch={handleSearch} />
				</Route>

				<Route exact path="/">
					<Home />
				</Route>

				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>
			<section id="footer">
				<h3>This is Located at the bottom of App.js</h3>
				<p>This a Footer on all pages</p>
			</section>
		</div>
	);
}

export default App;
