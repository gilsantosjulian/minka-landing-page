import React, { useState, useEffect } from 'react';
import { Box, Image } from 'grommet';

const styles = {
  container: {
    position: 'absolute',
    zIndex: 3,
  },
};

export default () => {
  const [visibility, setVisibility] = useState(true);

  useEffect(() => {
    if (visibility)
      setTimeout(() => setVisibility(false), 3000);
  }, []);

  if (visibility)
    return (
      <Box
        fill
        style={styles.container}
        background='light-1'
        justify='center'
        align='center'>
        <Image
          width='10%'
          src={require('assets/images/minka-simbol.svg')}
        />
      </Box>
    );
  
  return null;
};