import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SoloEntryForm from './SoloEntryForm';
import JudgeForm from './JudgeForm';
import Results from './Results';
import SoloPage from './SoloPage';
import './App.css';

function App() {
	return (
		<div className="App">
			<NavBar />
			<Switch>
				<Route path="/entryform">
					<SoloEntryForm />
				</Route>
				<Route path="/judgeform">
					<JudgeForm />
				</Route>
				<Route exact path="/results">
					<Results />
				</Route>
				<Route path="/solopage">
					<SoloPage />
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
