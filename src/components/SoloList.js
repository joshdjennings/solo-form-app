import React, { Card } from 'react';
import SoloCard from './SoloCard';

function SoloList({ solos }) {
	return (
		<div>
			<h1>Hello From SoloList</h1>
			<Card.Group itemsPerRow={6}>
				{solos.map((s) => (
					<SoloCard key={s.id} solos={s} />
				))}
			</Card.Group>
		</div>
	);
}

export default SoloList;
