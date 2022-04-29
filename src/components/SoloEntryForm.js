import React, { useState } from 'react';

function SoloEntryForm({ solos }) {
	const [query, setQuery] = useState('');

	const onChange = (event) => setQuery(event.target.value);
	const filteredSolos = solos.filter((name) => {
		console.log(name);
	});

	return (
		<div>
			<h2>Solo List</h2>
			<input type="text" value={query} onChange={onChange} />
			<div className="list">
				{filteredSolos.map((name) => (
					<div>{name}</div>
				))}
			</div>
		</div>
	);
}

// function handleInputChange(event) {
// 	onChangeForm(event.target.name, event.target.value);
// }

// function handleSubmit(event) {
// 	event.preventDefault();
// 	fetch(`http://localhost:3005/solos/${solo.id}`, {
// 		method: 'PATCH',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(solo),
// 	}).then((r) => r.json());
// 	// .then(onEditSolo);
// }

// if (!solo) return null;

// const { name, title, instrument } = solo;

// return (
// 	<div>
// 		<form
// 		// onSubmit={handleSubmit}
// 		>
// 			<div className="form-row">
// 				<div className="col-5">
// 					<input
// 						type="text"
// 						className="form-control"
// 						placeholder="Student Name"
// 						name="name"
// 						value={name}
// 						onChange={handleInputChange}
// 					/>
// 				</div>
// 				<div className="col-5">
// 					<input
// 						type="text"
// 						className="form-control"
// 						placeholder="Solo Title"
// 						name="title"
// 						value={title}
// 						onChange={handleInputChange}
// 					/>
// 				</div>
// 				<div className="col">
// 					<select
// 						name="instrument"
// 						value={instrument}
// 						onChange={handleInputChange}
// 						className="form-control"
// 					>
// 						<option value="Marimba">Marimba</option>
// 						<option value="Vibraphone">Vibraphone</option>
// 						<option value="Snare Drum">Snare Drum</option>
// 						<option value="Other">Other</option>
// 					</select>
// 				</div>

// 				<div className="col">
// 					<button type="submit" className="btn btn-success">
// 						Submit
// 					</button>
// 				</div>
// 			</div>
// 		</form>
// 	</div>
// 	);
// }

export default SoloEntryForm;
