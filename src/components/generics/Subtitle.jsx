import React from 'react';
import { Box, ResponsiveContext, Heading } from 'grommet';

export default ({ text }) => {

  const getMaxWidth = (size) => {
    if (size === 'small' || size === 'xsmall')
      return '80%';
    if (size === 'large' || size === 'xlarge')
      return '80%';
    return '60%';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            margin='0 0 40px'>
            <Heading
              level='3'
              textAlign='center'
              size={size}
              alignSelf='center'
              style={{ color: '#FFFFFF', maxWidth: getMaxWidth(size) }}>
              {text}
            </Heading>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}