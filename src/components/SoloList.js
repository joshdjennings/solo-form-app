import React from 'react';
import SoloCard from './SoloCard';
import { Card } from 'semantic-ui-react';

function SoloList({ solos }) {
	return (
		<div>
			<section id="soloList">
				<h1>List of Solo Entries</h1>
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
