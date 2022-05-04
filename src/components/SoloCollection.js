import React from 'react';
import SoloCard from './SoloCard';
import { Card } from 'semantic-ui-react';

function SoloCollection({ solos }) {
	return (
		<div>
			{/* <h1>Solo Collection</h1> */}
			<Card.Group>
				{solos.map((s) => (
					<SoloCard key={s.id} solos={s} />
				))}
			</Card.Group>
		</div>
	);
}

export default SoloCollection;
