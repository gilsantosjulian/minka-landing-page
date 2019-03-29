import React, { useState } from 'react';
import { Box, Button, Layer, Heading, Select, TextInput, FormField, TextArea, Form } from 'grommet';
import { Close } from 'grommet-icons';

import PubSub from 'services/pubSub.js';

export default ({ visibility }) => {

	const initialInputs = {
		name: '',
		email: '',
		phone: '',
		team: '',
		hackathonBefore: '',
		studies: '',
		gitAccount: '',
		nodeExperience: '',
		programmingLanguages: '',
		blockchainExperience: '',
		cloudPlatforms: '',
		currentlyEmployed: '',
		minkaHackaton: '',
	}

	const [form, setValues] = useState({ ...initialInputs });
	const [errors, setErrors] = useState({ ...initialInputs });
	const [trigger, setTrigger] = useState(false);

	const onChangeSelect = (key, value) => {

		setValues({
			...form,
			[key]: value
		});

		if (trigger)
			requireFields();
	};

	const onChange = e => {

		setValues({
			...form,
			[e.target.name]: e.target.value
		});

		if (trigger)
			requireFields();
	};

	const onSubmit = () => {

		setTrigger(true);
		requireFields();

		console.dir('form')
		console.dir(form)
	};

	const requireFields = () => {

		for (const key in form) {
			if (!form[key]) {
				errors[key] = 'require'
				setErrors({ ...errors });
			} else {
				errors[key] = ''
				setErrors({ ...errors });
			}
		}

	};

	const renderInput = (id, name, label, textArea) => {
		return (
			<FormField
				htmlFor={id}
				label={label}
				name={name}
			>
				{
					textArea
						? <TextArea
							id={id}
							name={name}
							onChange={onChange}
						/>
						: <TextInput
							id={id}
							name={name}
							onChange={onChange}
						/>
				}

			</FormField>);
	};

	const renderSelectInput = (id, name, label, options) => {
		return (
			<FormField
				htmlFor={id}
				label={label}
				name={name}
			>
				<Select
					id={id}
					name={name}
					multiple={false}
					options={options}
					value={form[name]}
					onChange={({ option }) => onChangeSelect(name, option)}
				/>
			</FormField>
		);
	};

	return (
		<Box
			width='100%'
			height='100%'
			background='dark-1'>

			{visibility && (
				<Layer
					position='right'
					full='vertical'
					modal
					onClickOutside={() => PubSub.getInstance().emit('onVisibilityChange')}
					onEsc={() => PubSub.getInstance().emit('onVisibilityChange')}
				>
					<Box>
						<Box
							direction='row'
							justify='end'>
							<Button
								className='menu-button-pressed'
								icon={<Close />}
								onClick={() => PubSub.getInstance().emit('onVisibilityChange')} />
						</Box>

						<Box
							flex={true}
							direction='row'
							style={{ padding: '0 25px 11px' }}>
							<Heading
								level='2'
								color='dark-2'>
								<span
									className='title-underlined'
									style={{ backgroundSize: '100% 0.25em', backgroundPosition: '0 95%' }}
								>
									Minka Hackathon
								</span>
							</Heading>
						</Box>
					</Box>

					<Box
						as='form'
						fill='vertical'
						overflow='auto'
						width='medium'
						pad='medium'
					//onSubmit={this.onClose}
					>
						<Box flex={false} direction='row' justify='between'>

							<Form onSubmit={onSubmit} errors={errors}>
								<Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>

									{renderInput('name_id', 'name', 'Full Name', false)}
									{renderInput('email_id', 'email', 'Email Address', false)}
									{renderInput('phone_id', 'phone', 'Mobile Number (Please include the country code)', false)}
									{renderInput('team_id', 'team', "What's your hackathon team name? (Don't mind if you come over alone)", false)}
									{renderInput('hackathonBefore_id', 'hackathonBefore', 'Have you ever attended a hackathon before?', false)}
									{
										renderSelectInput(
											'hackathonBefore_id',
											'hackathonBefore',
											'Have you ever attended a hackathon before?',
											['Yes', 'No'])
									}
									{
										renderSelectInput(
											'studies_id',
											'studies',
											'Do you have a BS/MS/ME in Computer Science? Or are you close to finish your studies?',
											[
												'Close to finish studies',
												'Bachelor Software - BS',
												'Master Software - MS',
												'Master Software - ME',
											])
									}
									{renderInput('gitAccount_id', 'gitAccount', "What's your GitHub /Github/Bitbucket account?", false)}
									{renderInput('nodeExperience_id', 'nodeExperience', "What's your experience working with NodeJS (frontend and/or backend)?", true)}
									{renderInput('programmingLanguages_id', 'programmingLanguages', 'Are you familiar with any other programming languages? Which ones?', true)}
									{renderInput('blockchainExperience_id', 'blockchainExperience', 'What is your experience working with blockchain technologies?', true)}
									{
										renderSelectInput(
											'cloudPlatforms_id',
											'cloudPlatforms',
											'Which cloud platforms are you (very) familiar with?',
											[
												'Google Cloud Platform',
												'AWS',
												'Microsoft Azure',
												'Other',
											])
									}
									{
										renderSelectInput(
											'currentlyEmployed_id',
											'currentlyEmployed',
											'Are you currently employed?',
											[
												'Yes',
												'No',
												'Other',
											])
									}
									{renderInput('minkaHackaton_id', 'minkaHackaton', 'How did you know about Minka Hackathon?', false)}

								</Box>
								<Box flex={false} as='footer' align='center'>
									<Button
										type='submit'
										label='Enviar'
										primary
									/>
								</Box>
							</Form>

						</Box>


					</Box>
				</Layer>
			)
			}

		</Box >
	);
};