import React from 'react';
import { Box, Image } from 'grommet';

export default () => {
  return (
    <Box
      margin={{ vertical: 'large' }}
      flex>
      <Image
        src={require('assets/images/paracaidas.svg')}
      />
    </Box>
  );
};