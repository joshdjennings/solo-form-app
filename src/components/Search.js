import React, { useState } from 'react';

function Search({ solos }) {
	const [search, setSearch] = useState('');
	const [sortValue, setSortValue] = useState('none');

	const handleChange = (e) => {
		// update the setSearch
		setSearch(e.target.value);
	};

	const displayedSolos = () => {
		if (search === '' && sortValue === 'none') {
			return solos;
		}

		const filteredsolos = solos.filter((s) =>
			s.name.includes(search.toLowerCase())
		);
	};
	return (
		<div className="ui search">
			<section id="search">
				<div className="ui icon input">
					<input className="prompt" value={search} onChange={handleChange} />
					<i className="search icon" />
				</div>
			</section>
		</div>
	);
}

export default Search;
