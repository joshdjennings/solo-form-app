import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

function SoloEntryForm({ solos, addNewSolo }) {
	const defaultState = {
		name: '',
		title: '',
		instrument: '',
	};

	const [formData, setFormData] = useState(defaultState);

	const handleChange = (e) => {
		const thingWeChange = e.target.name;
		setFormData(() => ({ ...formData, [thingWeChange]: e.target.value }));
	};
	// const [query, setQuery] = useState('');

	// const onChange = (event) => setQuery(event.target.value);
	// const filteredSolos = solos.filter((name) => {
	// 	console.log(name);
	// });

	return (
		<div>
			<section id="entryForm">
				<h2>This is the Entry Form</h2>

				<Form
					onSubmit={(e) => {
						e.preventDefault();
						console.log('submitting form...');

						// reset the form
						setFormData(defaultState);
						addNewSolo(formData);
					}}
				>
					<Form.Group widths="equal">
						<Form.Input
							fluid
							label="Name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Name"
							name="name"
						/>
						<Form.Input
							fluid
							label="Title"
							value={formData.title}
							onChange={handleChange}
							placeholder="Title"
							name="title"
						/>
						<Form.Input
							fluid
							label="Instrument"
							value={formData.instrument}
							onChange={handleChange}
							placeholder="Instrument"
							name="instrument"
						/>
					</Form.Group>
					<Form.Button>Submit</Form.Button>
				</Form>
				{/* <input type="text" value={query} onChange={onChange} />
			{filteredSolos.map((name) => (
				<div>{name}</div>
			))} */}
			</section>
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
