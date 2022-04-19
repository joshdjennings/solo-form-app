import React from 'react';
import Search from './Search';

function SoloEntryForm({ solos, search, handleSearch }) {
	return (
		<div>
			<section id="soloEntryForm">
				<h2>Solo Entry Form</h2>
				<p>Enter Solo Information Here</p>

				<Search />
			</section>
		</div>
	);
}

export default SoloEntryForm;
