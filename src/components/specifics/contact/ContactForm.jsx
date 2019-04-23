import React, { Component } from 'react';
import { Box, Form, FormField, TextInput, TextArea, Button, Text } from 'grommet';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import Recaptcha from 'react-google-invisible-recaptcha';

import requester from 'services/requester';
import Notification from 'components/generics/Notification';
import Spinner from 'components/generics/Spinner';

const keys = {
  name: '',
  email: '',
  message: '',
};

const styles = {
  textArea: {
    resize: 'none',
  },
};

export default class ContactForm extends Component {
  state = {
    values: {...keys},
    errors: {...keys},
    text: '',
    visibility: false,
    background: '',
    spinnerVisibility: false
  }

  onSubmit = () => {
    if (this.isValidData())
      this.executeSubmit();
  };

  isValidData = () => {
    this.setState((currentErrors) => ({
      ...currentErrors,
      email: isEmail(this.state.values.email) ? '' : 'Incorrect format',
      name: !isEmpty(this.state.values.name) ? '' : 'Required field',
      message: !isEmpty(this.state.values.message) ? '' : 'Required field',
    }))

    return isEmail(this.state.values.email) &&
      !isEmpty(this.state.values.name) &&
      !isEmpty(this.state.values.message);
  };

  executeSubmit = () => {
    this.setState({ spinnerVisibility: true });
    this.recaptcha.execute();
  };

  onVerifyRecaptcha = (token) => {
    requester
    .post('/sendEmail', {
      token,
      name: this.state.values.name,
      from: this.state.values.email,
      message: this.state.values.message,
    })
    .then(this.checkData)
    .catch(this.showError);
  };

  checkData = ({ data }) => {
    this.recaptcha.reset();
    if (data.errorMessage)
      this.showNotification('An error ocurred', 'status-critical');
    else {
      this.setState({ values: keys});
      this.showNotification('Your email has been sent');
    }

    this.setState({ spinnerVisibility: false });
    setTimeout(() => this.setState({ visibility: false }), 5000);
  };

  showError = (error) => {
    this.recaptcha.reset();
    this.showNotification('An error ocurred', 'status-critical');
    this.setState({ spinnerVisibility: false });
    setTimeout(() => this.setState({ visibility: false }), 5000);
  };

  showNotification = (text, background) => {
    this.setState({ text, background, visibility: true });
  };

  onChange = (key) => ({ target: { value }}) => {
    this.setState({ values: { ...this.state.values, [key]: value } }, () => console.log(this.state.values)
    );
  };
  
  render() {
    return (
      <Box
        width='100%'
        pad='xlarge'>
        <Form
          errors={this.state.errors}
          onSubmit={this.onSubmit}>
          <FormField
            name='name'>
            <TextInput
              value={this.state.values.name}
              placeholder='Full name'
              onChange={this.onChange('name')}
            />
          </FormField>
          <FormField
            name='email'>
            <TextInput
              value={this.state.values.email}
              placeholder='Email'
              onChange={this.onChange('email')}
            />
          </FormField>
          <FormField
            name='message'>
            <TextArea
              value={this.state.values.message}
              style={styles.textArea}
              placeholder='Your message'
              onChange={this.onChange('message')}
            />
          </FormField>
          <Box
            align='center'>
            <Spinner
              visibility={this.state.spinnerVisibility}
            />
            <Button
              primary
              type='submit'
              color='accent-2'
              margin={{ top: 'medium' }}
              label={<Text color='light-1'>{'Send message'}</Text>}
            />
          </Box>
        </Form>
        {
          this.state.visibility &&
          <Notification
            text={this.state.text}
            visibility={true}
            background={this.state.background}
          />
        }
        <Recaptcha
          ref={(ref) => this.recaptcha = ref}
          sitekey={'6LdT158UAAAAAM-PEFOsJy9_fFAd0Jfg6-qRXMH2'}
          onResolved={this.onVerifyRecaptcha}/>
      </Box>
    );
  };
};