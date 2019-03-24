import React from 'react';
import { Box, Image } from 'grommet';

const styles = {
  hackerman: {
    width: '80%',
    height: '80%',
  },
};

export default ({ width, hackerman }) => {

  return (
    <Box
      width={width}
      fill='vertical'
      justify='center'
      align='center'>
      <Image
        src={hackerman}
        style={styles.hackerman} />
    </Box>
  );
};