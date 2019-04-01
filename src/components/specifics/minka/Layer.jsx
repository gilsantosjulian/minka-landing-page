import React, { useState } from 'react';
import Notification from 'components/generics/Notification';

//Import Grommet components
import {
	Box,
	Button,
	Layer,
	Form,
	FormField,
	Heading,
	ResponsiveContext,
	Select,
	TextInput,
	TextArea,
} from 'grommet';

//Import Grommet icons
import { Close } from 'grommet-icons';

//Import publisher-subscriber and firebase libraries
import PubSub from 'services/pubSub.js';
import firebase from 'services/firebase-sdk/firebase.js';
import moment from 'moment-timezone';

// set timezone of colombia
moment.tz.setDefault("America/Bogota");

const COLLECTION_NAME = 'participants';

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
	const [showNotification, setShowNotification] = useState(false);

	const ref = firebase.firestore().collection(COLLECTION_NAME);

	const onChangeSelect = (key, value) => {
		form[key] = value;
		setValues({
			...form,
		});
		if (trigger)
			requireFields();
	};

	const onChange = e => {
		form[e.target.name] = e.target.value;
		setValues({
			...form,
		});

		if (trigger)
			requireFields();
	};

	const onSubmit = (size) => {
		setTrigger(true);
		requireFields();

		if (isErrorsEmpty()) {
			ref.add({ ...form, createAt: moment().toDate() })
				.then(() => {
					// Clean inputs fields
					clearForm();
					if (size === 'xsmall' || size === 'small')
						PubSub.getInstance().emit('onVisibilityChange')
					// Show notification
					setShowNotification(true);
				})
				.catch((error) => {
					console.error("Error adding document: ", error);
				});
		}
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

	const clearForm = () => {
		for (const key in form) {
			form[key] = '';
			setValues({ ...form });
		}
		setTrigger(false);
	};

	const isErrorsEmpty = () => {
		for (var key in errors) {
			if (errors[key] === 'require')
				return false;
		}
		return true;
	};

	const renderInput = (id, name, label, textArea, placeHolder) => {
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
							placeholder={placeHolder}
							value={form[name]}
							onChange={onChange}
						/>
						: <TextInput
							id={id}
							name={name}
							placeholder={placeHolder}
							value={form[name]}
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
				style={{ borderBottom: 'none' }}
			>
				<Select
					id={id}
					name={name}
					multiple={false}
					options={options}
					value={form[name]}
					focusIndicator={false}
					onChange={({ option }) => onChangeSelect(name, option)}
				/>
			</FormField>
		);
	};

	const getLayerPosition = (size) => {
		if (size === 'xsmall' || size === 'small' || size === 'medium')
			return 'center';
		return 'right';
	}

	const getFormWidth = (size) => {
		if (size === 'xsmall' || size === 'small')
			return 'xlarge';
		return 'medium';
	};

	return (
		<ResponsiveContext.Consumer>
			{(size) => {
				return (
					<Box
						width='100%'
						height='100%'
						background='dark-1'>

						{visibility && (
							<Layer
								position={getLayerPosition(size)}
								onClickOutside={() => PubSub.getInstance().emit('onVisibilityChange')}
								onEsc={() => PubSub.getInstance().emit('onVisibilityChange')}
							>
								<Box
									flex={false}
								>
									<Box
										alignSelf='end'
									>
										<Button
											className='menu-button-pressed'
											icon={
												<Close
													color='brand'
												/>
											}
											onClick={() => PubSub.getInstance().emit('onVisibilityChange')} />
									</Box>

									<Box
										style={{ padding: '10px 25px 0px' }}>
										<Heading
											level='2'
											color='dark-2'
											size={size}
										>
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
									fill='vertical'
									overflow='auto'
									width={getFormWidth(size)}
									pad='medium'
								//onSubmit={this.onClose}
								>
									<Box flex={false} direction='row' justify='between'>

										<Form
											onSubmit={() => onSubmit(size)}
											errors={errors}
											value={form}
											height='auto'
										>
											<Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>

												{renderInput('name_id', 'name', 'Full Name', false, 'Elon Musk')}
												{renderInput('email_id', 'email', 'Email Address', false, 'elonmusk@tesla.com')}
												{renderInput('phone_id', 'phone', 'Mobile Number (Please include the country code)', false, '+54 53567889')}
												{renderInput('team_id', 'team', "What's your hackathon team name? (Don't mind if you come over alone)", false, 'Tesla')}
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
															'Bachelor Degree - BSc',
															'Master of Science - MSc',
															'Other',
														])
												}
												{renderInput('gitAccount_id', 'gitAccount', "What's your GitHub /Github/Bitbucket account?", false, 'https://github.com/muskelon')}
												{renderInput('nodeExperience_id', 'nodeExperience', "What's your experience working with NodeJS (frontend and/or backend)?", true, 'Write your experience')}
												{renderInput('programmingLanguages_id', 'programmingLanguages', 'Are you familiar with any other programming languages? Which ones?', true, 'Tell us')}
												{renderInput('blockchainExperience_id', 'blockchainExperience', 'What is your experience working with blockchain technologies?', true, 'Write your experience')}
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
												{renderInput('minkaHackaton_id', 'minkaHackaton', 'How did you know about Minka Hackathon?', false, 'Friends/Facebook/Linkedin')}

											</Box>
											<Box flex={false} as='footer' align='center'>
												<Button
													type='submit'
													label='Send'
													primary
												/>
											</Box>
										</Form>

									</Box>

								</Box>
							</Layer>
						)}

						{showNotification &&
							(
								<Notification
									visibility={true}
									text='User registered successfully!'
								/>
							)
						}

					</Box >
				);

			}}
		</ResponsiveContext.Consumer>
	);
};