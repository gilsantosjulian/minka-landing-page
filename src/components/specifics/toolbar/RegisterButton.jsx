import React from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';

export default ({ text }) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        if (size !== 'xsmall' &&
        size !== 'small' &&
        size !== 'medium' &&
        size !== 'large')
          return (
            <Box
              pad='medium'
              width='20%'
              justify='center'>
              <Button
                primary
                label={text}
              />
            </Box>
          );
      }}
    </ResponsiveContext.Consumer>
  );
};