import React, { Card } from 'react';

function SoloCard({ solo_information: { id, name, solo, instrument } }) {
	// const [showFeedback, setShowFeedback] = useState('');

	// function handleCardClick(event) {
	// 	return setShowFeedback((mUV) => !mUV);
	// }
	// left of arrow is the Most Updated Value and the right side is what the new state is going to be (the opposite)
	// if you use the variable inside the function you're trying to set, its better to use it as a callback to ensure you're using the most updated version

	return (
		<Card
		// onClick={handleCardClick}
		>
			<div>
				<div className="name">
					<div className="name">{name}</div>
				</div>
				<div className="solo name">
					<div className="solo name">{solo}</div>
				</div>
				<div className="instrument">
					<div className="instrument">{instrument}</div>
				</div>
			</div>
		</Card>
	);
}

export default SoloCard;
