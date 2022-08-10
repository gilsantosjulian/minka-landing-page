import React from 'react';
import { Paragraph, Box, ResponsiveContext } from 'grommet';

export default ({ text }) => {

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            className='blockquote'
            margin={{ left: 'xlarge', right: 'large' }}>
            <Paragraph
              size={size}
              color='dark-2'>
              {text}
            </Paragraph>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};