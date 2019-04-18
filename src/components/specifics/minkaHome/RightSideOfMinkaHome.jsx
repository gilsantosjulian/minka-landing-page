import React from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

const styles = {
  hackerman: {
    width: '80%',
    height: '80%',
  },
};

export default ({ hackerman }) => {

  const getWidth = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return '100%';

    return '50%';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            height='88vh'
            width={getWidth(size)}
            align='center'>
            <Image
              src={hackerman}
              style={styles.hackerman} />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};