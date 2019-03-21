import React from 'react';
import { Box, Text } from 'grommet';
import { Link } from 'react-navi';

export default () => {
  return (
    <Box>
      <Text>Home</Text>
      <Link href='/another'>
        Another
      </Link>
    </Box>
  );
};