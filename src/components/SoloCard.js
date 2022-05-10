import React from 'react';
import { Card } from 'semantic-ui-react';

function SoloCard({ solos: { id, name, title, instrument, inst_pic } }) {
	// const sd = './sd.png';
	// const timp = './Timpani.png';
	// const vibe = './Vibraphone.png';
	// const drums = './drums2.png';
	// const congas = './Congas.png';

	return (
		<div>
			<Card>
				<div className="image">
					<div className="content">
						<div className="name">{name}</div>
						<div className="title">{title}</div>
						<div className="instrument">{instrument}</div>
						<div className="img">{inst_pic}</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default SoloCard;
