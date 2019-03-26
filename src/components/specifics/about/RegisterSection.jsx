import React from 'react';
import { Box, Button, Paragraph, Heading } from 'grommet';

export default ({ texts }) => {
  return (
    <Box
      wrap
      direction='row'
      justify='around'
      background='dark-2'
      pad='large'>
      <Box>
        <Heading
          level='3'
          color='accent-2'
          margin={{ bottom: 'medium' }}>
          {texts[0]}
        </Heading>
        <Paragraph>
          {texts[1]}
        </Paragraph>
      </Box>

      <Button
        primary
        margin='large'
        label={texts[2]}
      />
    </Box>
  );
};