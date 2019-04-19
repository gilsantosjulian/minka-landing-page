import React from 'react';
import { Box, Form, FormField, TextInput, TextArea, Button, Text } from 'grommet';

const styles = {
  textArea: {
    resize: 'none',
  },
};

export default () => {
  return (
    <Box
      width='100%'
      pad='xlarge'>
      <Form>
        <FormField>
          <TextInput
            placeholder='Full name'
          />
        </FormField>
        <FormField>
          <TextInput
            placeholder='Email'
          />
        </FormField>
        <FormField>
          <TextArea
            style={styles.textArea}
            placeholder='Your message'
          />
        </FormField>
        <Button
          primary
          color='accent-2'
          margin={{ top: 'medium' }}
          label={<Text color='light-1'>{'Send message'}</Text>}
        />
      </Form>
    </Box>
  );
};