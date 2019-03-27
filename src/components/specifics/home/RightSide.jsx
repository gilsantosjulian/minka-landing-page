import React from 'react';
import { Box, Image } from 'grommet';

const styles = {
  hackerman: {
    width: '60%',
    height: '60%',
  },
};

export default ({ width, hackerman }) => {

  return (
    <Box
      width={width}
      fill='vertical'
      align='center'>
      <Image
        src={hackerman}
        style={styles.hackerman} />
    </Box>
  );
};