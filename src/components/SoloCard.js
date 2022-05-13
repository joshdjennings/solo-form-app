import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function SoloCard({ solos: { id, name, title, instrument, inst_pic } }) {
	return (
		<div className="card">
			<Card>
				<Image src={inst_pic} />
				<div className="content">
					<div className="name">{name}</div>
					<div className="title">{title}</div>
					<div className="instrument">{instrument}</div>
				</div>
			</Card>
		</div>
	);
}

export default SoloCard;
