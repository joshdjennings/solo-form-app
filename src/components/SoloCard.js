import React, { useState, Card } from 'react';

function SoloCard({
	solos: {
		id,
		name,
		solo,
		Instrument,
		feedback: {
			memory,
			tone,
			technique,
			musicianship,
			comments,
			rating,
			outstanding,
			judge,
		},
	},
}) {
	// Above is nested destructuring

	const [showFeedback, setShowFeedback] = useState(false);

	function handleCardClick(event) {
		return setShowFeedback((mUV) => !mUV);
	}
	// left of arrow is the Most Updated Value and the right side is what the new state is going to be (the opposite)
	// if you use the variable inside the function you're trying to set, its better to use it as a callback to ensure you're using the most updated version

	return (
		<Card onClick={handleCardClick}>
			<div>
				<div className="image">
					<img alt="oh no!" src={showFeedback ? name : solo} />
				</div>
				<div className="content">
					<div className="header">{name}</div>
				</div>
				<div className="extra content">
					<span>
						<i className="icon heartbeat red" />
						{rating} rating
					</span>
				</div>
			</div>
		</Card>
	);
}

export default SoloCard;
