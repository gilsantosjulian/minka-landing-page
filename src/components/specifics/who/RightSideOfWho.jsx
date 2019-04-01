import React from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

const styles = {
  paracaidas: {
    width: '100%',
    height: '100%',
  },
};

export default ({ image }) => {

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
            width={getWidth(size)}
            fill='vertical'
            align='center'
            margin='large'>
            <Image
              src={image}
              style={styles.paracaidas} />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};