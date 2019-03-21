import React from 'react';
import { Box } from 'grommet';

export default ({ visibility }) => {
  if (visibility)
    return (
      <Box>
        <Box id='horizontal-spinner' background='accent-1' height='2px'/>
      </Box>
    );

  return null;
};