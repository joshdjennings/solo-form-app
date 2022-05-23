import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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

	function handleDeleteSolo(id) {
		const updatedSolosArray = solos.filter((solo) => solo.id !== id);
		setSolos(updatedSolosArray);
	}

	return (
		<div
			className="App"
			style={{
				// possibly move this to index.css
				backgroundImage: 'url(./Drums.png)',
				backgroundRepeat: 'no-repeat',
				height: '100vh',
				backgroundSize: 'cover',
			}}
		>
			<NavBar />
			<Switch>
				<Route path="/solos/new">
					<SoloEntryForm setSolos={setSolos} />
				</Route>
				<Route path="/solos">
					<SoloList solos={solos} onDeleteSolo={handleDeleteSolo} />
				</Route>
				<Route path="/results">
					<Results solos={solos} />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
