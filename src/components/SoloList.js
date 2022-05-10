import React from 'react';
import SoloCard from './SoloCard';
import { Card } from 'semantic-ui-react';

function SoloList({ solos }) {
	return (
		<div>
			<br />
			<br />
			<br />
			<section id="sololist">
				<Card>
					{solos.map((s) => (
						<SoloCard key={s.id} solos={s} />
					))}
				</Card>
			</section>
		</div>
	);
}

export default SoloList;
