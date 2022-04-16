import React, { Card } from 'react';
import SoloCard from './SoloCard';

function SoloCollection({ solo }) {
	return (
		<div>
			<h1>Hello From Solo Collection</h1>
			<Card.Group itemsPerRow={6}>
				{solo.map((s) => (
					<SoloCard key={s.id} solo={s} />
				))}
			</Card.Group>
		</div>
	);
}

export default SoloCollection;
