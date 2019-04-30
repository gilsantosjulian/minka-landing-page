import React from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';

const styles = {
  paracaidas: {
    width: '100%',
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
            height='100%'
            align='center'
            justify='center'>
            <Image
              src={image}
              style={styles.paracaidas} />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};