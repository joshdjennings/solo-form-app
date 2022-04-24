import React from 'react';
// import Search from './Search';

function SoloEntryForm({ addNewSolo }) {
	// const defaultState = {
	// 	name: '',
	// 	title: '',
	// 	instrument: '',
	// };

	// const [formData, setFormData] = useState(defaultState);

	// const handleChange = (e) => {
	// 	const thingWeChange = e.target.name;
	// 	setFormData(() => ({ ...formData, [thingWeChange]: e.target.value }));
	// };

	return (
		<div>
			<section id="soloEntryForm">
				<h2>Solo Entry Form</h2>
				<p>Enter Solo Information Here</p>

				{/* <Search /> */}

				<h3>Add a Solo!</h3>
				{/* <Form
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
						label="title"
						value={formData.title}
						onChange={handleChange}
						placeholder="title"
						name="title"
					/>
					<Form.Input
						fluid
						label="instrument"
						value={formData.instrument}
						onChange={handleChange}
						placeholder="instrument"
						name="instrument"
					/>
				</Form.Group>
				<Form.Button>Submit</Form.Button>
			</Form> */}
			</section>
		</div>
	);
}

export default SoloEntryForm;
