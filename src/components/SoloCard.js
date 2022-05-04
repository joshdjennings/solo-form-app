import React from 'react';
import { Card } from 'semantic-ui-react';

function SoloCard({ solos: { id, name, title, instrument } }) {
	return (
		<Card>
			<div>
				<div className="content">
					<div className="name">{name}</div>
					<div className="title">{title}</div>
					<div className="instrument">{instrument}</div>
				</div>
				<button>delete</button>
			</div>
		</Card>
	);
}

export default SoloCard;
