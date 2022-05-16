import React, { useState } from 'react';

function ListSearch() {
	const [currentSearch, setCurrentSearch] = useState('');

	function onSearch(newSearch) {
		setCurrentSearch(newSearch);
	}

	function handleSubmit(e) {
		e.preventDefault();
		onSearch(currentSearch);
	}

	return (
		<form className="searchbar" onSubmit={handleSubmit}>
			<input
				type="text"
				id="search"
				placeholder="search names"
				value={currentSearch}
				onChange={(e) => setCurrentSearch(e.target.value)}
			/>
			<button type="submit">🔍</button>
		</form>
	);
}

export default ListSearch;
