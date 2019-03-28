import React from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';

export default ({ text }) => {

  const getMargin = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return { top: 'large' };

    return {};
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            flex
            justify='center'
            align='center'>
            <Button
              primary
              margin={getMargin(size)}
              label={text}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};