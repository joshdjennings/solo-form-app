import React from 'react';

function Search({ search, handleSearch }) {
	return (
		<div className="ui search">
			<section id="search">
				<div className="ui icon input">
					<input className="prompt" value={search} onChange={handleSearch} />
					<i className="search icon" />
				</div>
			</section>
		</div>
	);
}

export default Search;
