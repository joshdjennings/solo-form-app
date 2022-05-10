import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

function SoloEntryForm({ solos, setSolos }) {
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

	const addNewSolo = (formData) => {
		const dataToSend = {
			...formData,
		};

		const configObj = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataToSend),
		};

		fetch('http://localhost:3005/solos', configObj)
			.then((r) => r.json())
			.then((newSolo) => setSolos((mUV) => [...mUV, newSolo]));
	};

	return (
		<div>
			<section id="entryForm">
				<h1>This is the Entry Form</h1>
				<p>Please enter your solo information here.</p>
				<Form
					onSubmit={(e) => {
						e.preventDefault();

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
						<Form.Input
							fluid
							label="Image"
							value={formData.inst_pic}
							onChange={handleChange}
							placeholder="Image"
							name="inst_pic"
						/>
					</Form.Group>
					<Form.Button>Submit</Form.Button>
				</Form>
			</section>
		</div>
	);
}

export default SoloEntryForm;
