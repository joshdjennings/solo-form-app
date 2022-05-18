import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function SoloCard({
	solos: { id, name, title, instrument, inst_pic },
	onDeleteSolo,
}) {
	function handleDelete() {
		fetch(`http://localhost:3005/solos/${id}`, {
			method: 'DELETE',
		})
			.then((r) => r.json())
			.then(() => {
				onDeleteSolo(id);
			});
	}

	return (
		<div className="card">
			<Card>
				<Image src={inst_pic} alt="Sorry, no image available." />
				<div className="content">
					<div className="name">Performer: {name}</div>
					<div className="title">Title: {title}</div>
					<div className="instrument">Instrument: {instrument}</div>
					<button onClick={handleDelete}>Delete Entry</button>
				</div>
			</Card>
		</div>
	);
}

export default SoloCard;
