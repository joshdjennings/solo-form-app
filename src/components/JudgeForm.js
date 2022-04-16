import React from 'react';
import Search from './Search';

function JudgeForm({ search, handleSearch }) {
	return (
		<section id="judgeForm">
			<h2>Judge's Form</h2>
			<p>Enter Solo Adjudications Here</p>
			<div>
				<Search search={search} handleSearch={handleSearch} />
			</div>
		</section>
	);
}

export default JudgeForm;
