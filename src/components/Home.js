import React from 'react';

function Home() {
	return (
		<div id="home">
			<section>
				<h1>This is the Homepage</h1>
				<p>
					Welcome to the Solo and Ensemble Homepage. Here you will need to
					decide whether you are a{' '}
					<a
						style={{ color: '#FCF15B' }}
						href="http://localhost:3000/entryform"
					>
						Soloist
					</a>{' '}
					or a{' '}
					<a
						style={{ color: '#FCF15B' }}
						href="http://localhost:3000/judgeform"
					>
						Judge
					</a>
					.
				</p>
			</section>
		</div>
	);
}

export default Home;
