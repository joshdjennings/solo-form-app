import React from 'react';

function Home() {
	return (
		<section id="home">
			<h1 style={{ color: 'firebrick' }}>This is the Homepage</h1>
			<p>
				Welcome to the Solo and Ensemble Homepage. Here you will need to decide
				whether you are a <a href="http://localhost:3000/soloentry">Soloist</a>{' '}
				or a <a href="http://localhost:3000/judgeform">Judge</a>.
			</p>
		</section>
	);
}

export default Home;
