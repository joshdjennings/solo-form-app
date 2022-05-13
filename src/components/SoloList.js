import React from 'react';
import SoloCard from './SoloCard';
import { Card } from 'semantic-ui-react';

function SoloList({ solos }) {
	return (
		<div>
			<br />
			<br />
			<br />
			<section id="soloList">
				<h1>List of Solo Entries</h1>
				<Card.Group itemsPerColumn={3}>
					{solos.map((s) => (
						<SoloCard key={s.id} solos={s} />
					))}
				</Card.Group>
			</section>
		</div>
	);
}

export default SoloList;
