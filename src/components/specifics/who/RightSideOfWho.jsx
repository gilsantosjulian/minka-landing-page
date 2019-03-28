import React from 'react';
import { Box, Image } from 'grommet';

const styles = {
  container: {
    position: 'relative',
  },
  background: {
    position: 'absolute',
    zIndex: -1,
  },
};

export default () => {
  return (
    <Box
      margin={{ vertical: 'large' }}
      style={styles.container}
      flex>
      <Image
        style={styles.background}
        src={require('assets/images/paracaidas-bg.svg')}
      />
      <Image src={require('assets/images/paracaidas.svg')} />
    </Box>
  );
};