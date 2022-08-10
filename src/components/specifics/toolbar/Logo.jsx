import React from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

export default () => {

  const getWidth = (size) => {
    return size === 'xsmall' ||
    size === 'small' ||
    size === 'medium' ||
    size === 'large' 
    ? '100%'
    : '20%'
  };

  const getAlign = (size) => {
    return size === 'xsmall' ||
    size === 'small' ||
    size === 'medium' ||
    size === 'large' 
    ? 'center'
    : 'end'
  }

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            justify='center'
            width={getWidth(size)}
            align={getAlign(size)} >
            <Image
              src={require('assets/images/logo.svg')}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};