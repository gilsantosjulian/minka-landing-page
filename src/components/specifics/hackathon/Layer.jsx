import React, { Component } from 'react';
import Notification from 'components/generics/Notification';
import Recaptcha from 'react-google-invisible-recaptcha';
import Spinner from 'components/generics/Spinner';

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

//Import publisher-subscriber and requester
import PubSub from 'services/pubSub.js';
import requester from 'services/requester.js';

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
};

export default class HackathonRegisterForm extends Component {

	state = {
		form: { ...initialInputs },
		errors: { ...initialInputs },
		trigger: false,
		showNotification: false,
		showSpinner: false,
	};

	onChangeSelect = (key, value) => {
		let { form, trigger } = this.state;
		form[key] = value;
		this.setState({ ...form });
		if (trigger)
			this.requireFields();
	}

	onChange = (e) => {
		let { form, trigger } = this.state;
		form[e.target.name] = e.target.value;
		this.setState({ ...form });

		if (trigger)
			this.requireFields();
	}

	onSubmit = (size) => {
		this.setState({ trigger: true });
		this.requireFields();

		if (this.isErrorsEmpty()) {
			this.setState({ showSpinner: true });
			this.recaptcha.execute();
			if (size === 'xsmall' || size === 'small')
				PubSub.getInstance().emit('onVisibilityChange');
		}
	}

	onVerifyRecaptcha = (token) => {
		let { form } = this.state;
		requester
			.post('/addUser', { ...form, token: token })
			.then(() => {
				this.clearForm();
				this.setState({ showSpinner: false });
				this.setState({ showNotification: true });
				setTimeout(() => this.setState({ showNotification: false }), 4000);
			})
			.then(() => this.recaptcha.reset())
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	}

	requireFields = () => {
		let { form, errors } = this.state;
		for (const key in form) {
			if (!form[key]) {
				errors[key] = 'require';
				this.setState({ ...errors });
			} else {
				errors[key] = '';
				this.setState({ ...errors });
			}
		}
	}

	clearForm = () => {
		let { form } = this.state;
		for (const key in form) {
			form[key] = '';
			this.setState({ ...form });
		}
		this.setState({ trigger: false });
	}

	isErrorsEmpty = () => {
		let { errors } = this.state;
		for (var key in errors) {
			if (errors[key] === 'require')
				return false;
		}
		return true;
	}

	renderInput = (id, name, label, textArea, placeHolder) => {
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
							value={this.state.form[name]}
							onChange={(e) => this.onChange(e)}
						/>
						: <TextInput
							id={id}
							name={name}
							placeholder={placeHolder}
							value={this.state.form[name]}
							onChange={(e) => this.onChange(e)}
						/>
				}

			</FormField>);
	}

	renderSelectInput = (id, name, label, options) => {
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
					value={this.state.form[name]}
					focusIndicator={false}
					onChange={({ option }) => this.onChangeSelect(name, option)}
				/>
			</FormField>
		);
	}

	getLayerPosition = (size) => {
		if (size === 'xsmall' || size === 'small' || size === 'medium')
			return 'center';
		return 'right';
	}

	getFormWidth = (size) => {
		if (size === 'xsmall' || size === 'small')
			return 'xlarge';
		return 'medium';
	}

	render() {
		return (
			<ResponsiveContext.Consumer>
				{(size) => {
					return (
						<Box
							width='100%'
							height='100%'
							background='dark-1'>

							{this.props.visibility && (
								<Layer
									position={this.getLayerPosition(size)}
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
										width={this.getFormWidth(size)}
										pad='medium'
									//onSubmit={this.onClose}
									>
										<Box flex={false} direction='row' justify='between'>

											<Form
												onSubmit={() => this.onSubmit(size)}
												errors={this.state.errors}
												value={this.state.form}
												height='auto'
											>
												<Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>

													{this.renderInput('name_id', 'name', 'Full Name', false, 'Elon Musk')}
													{this.renderInput('email_id', 'email', 'Email Address', false, 'elonmusk@tesla.com')}
													{this.renderInput('phone_id', 'phone', 'Mobile Number (Please include the country code)', false, '+54 53567889')}
													{this.renderInput('team_id', 'team', "What's your hackathon team name? (Don't mind if you come over alone)", false, 'Tesla')}
													{
														this.renderSelectInput(
															'hackathonBefore_id',
															'hackathonBefore',
															'Have you ever attended a hackathon before?',
															['Yes', 'No'])
													}
													{
														this.renderSelectInput(
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
													{this.renderInput('gitAccount_id', 'gitAccount', "What's your GitHub /Github/Bitbucket account?", false, 'https://github.com/muskelon')}
													{this.renderInput('nodeExperience_id', 'nodeExperience', "What's your experience working with NodeJS (frontend and/or backend)?", true, 'Write your experience')}
													{this.renderInput('programmingLanguages_id', 'programmingLanguages', 'Are you familiar with any other programming languages? Which ones?', true, 'Tell us')}
													{this.renderInput('blockchainExperience_id', 'blockchainExperience', 'What is your experience working with blockchain technologies?', true, 'Write your experience')}
													{
														this.renderSelectInput(
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
														this.renderSelectInput(
															'currentlyEmployed_id',
															'currentlyEmployed',
															'Are you currently employed?',
															[
																'Yes',
																'No',
																'Other',
															])
													}
													{this.renderInput('minkaHackaton_id', 'minkaHackaton', 'How did you know about Minka Hackathon?', false, 'Friends/Facebook/Linkedin')}

													{this.state.showSpinner &&
														(
															<Spinner
																visibility={true}
															/>
														)
													}
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

							{this.state.showNotification &&
								(
									<Notification
										visibility={true}
										text='User registered successfully!'
									/>
								)
							}
							<Recaptcha
								ref={(ref) => this.recaptcha = ref}
								sitekey={'6LdT158UAAAAAM-PEFOsJy9_fFAd0Jfg6-qRXMH2'}
								onResolved={this.onVerifyRecaptcha}
							/>

						</Box >
					);

				}}
			</ResponsiveContext.Consumer>
		);
	}

}