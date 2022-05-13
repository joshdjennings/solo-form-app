import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SoloEntryForm from './SoloEntryForm';
import Results from './Results';
import SoloList from './SoloList';

function App() {
	const [solos, setSolos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3005/solos')
			.then((res) => res.json())
			.then((data) => setSolos(data));
	}, []);

	return (
		<div
			className="App"
			style={{
				backgroundImage: 'url(./Drums.png)',
				backgroundRepeat: 'no-repeat',
				height: '100vh',
				backgroundSize: 'cover',
			}}
		>
			<NavBar />
			<Switch>
				<Route path="/entryform">
					<SoloEntryForm setSolos={setSolos} />
				</Route>
				<Route path="/sololist">
					<SoloList solos={solos} />
				</Route>
				<Route path="/results">
					<Results solos={solos} />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="*">
					<h1>404 not found</h1>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
