import React from 'react';
import { Box, Heading, ResponsiveContext } from 'grommet';

export default ({ texts }) => {

  const getMargin = (size) => {
    if (size === 'xsmall' ||
        size === 'small')
      return { top: 'xlarge', bottom: 'large' };
    if (size === 'medium' ||
        size === 'large')
      return { vertical: 'large' };
      
    return { left: 'xlarge', vertical: 'large' };
  };

  const getJustify = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'center';
      
    return 'start';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            margin={getMargin(size)}
            justify={getJustify(size)}
            direction='row'>
            <Heading
              size={size}
              level='1'
              color='dark-2'
              margin={{ right: 'xsmall' }}>
              {texts[0]}
            </Heading>
            <Heading
              size={size}
              level='1'
              color='accent-2'>
              {texts[1]}
            </Heading>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};