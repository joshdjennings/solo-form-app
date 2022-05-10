import React from 'react';
import SoloCard from './SoloCard';
import { Card } from 'semantic-ui-react';

function SoloList({ solos }) {
	return (
		<div>
			<section id="sololist">
				<Card.Group itemsPerRow={3}>
					{solos.map((s) => (
						<SoloCard key={s.id} solos={s} />
					))}
				</Card.Group>
			</section>
		</div>
	);
}

export default SoloList;
