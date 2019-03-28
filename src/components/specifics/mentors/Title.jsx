import React from 'react';
import { Box, Heading, ResponsiveContext } from 'grommet';

export default ({ texts }) => {

  const getMargin = (size) => {
    if (size === 'xsmall' ||
        size === 'small')
      return { top: 'xlarge', bottom: 'large' };
    if (size === 'medium' ||
        size === 'large')
      return { top: 'large', bottom: 'medium' };

    return { top: 'medium' };
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            width='100%'
            direction='row'
            justify='center'
            margin={getMargin(size)}>
            <Heading
              size={size}
              level='1'
              color='accent-2'
              margin={{ right: 'small' }}>
              {texts[0]}
            </Heading>
            <Heading
              size={size}
              level='1'
              color='dark-2'>
              {texts[1]}
            </Heading>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};