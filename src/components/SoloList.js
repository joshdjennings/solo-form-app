import React from 'react';
import SoloCard from './SoloCard';
import ListSearch from './ListSearch';
import { Card } from 'semantic-ui-react';

function SoloList({ solos }) {
	return (
		<div>
			<section id="soloList">
				<h1>List of Solo Entries</h1>
				<ListSearch />
			</section>
			<Card.Group>
				{solos.map((s) => (
					<SoloCard key={s.id} solos={s} />
				))}
			</Card.Group>
		</div>
	);
}

export default SoloList;
