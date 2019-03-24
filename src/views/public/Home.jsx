import React from 'react';
import { Box, Text } from 'grommet';
import { Link, useCurrentRoute } from 'react-navi';

export default () => {
  const { data: { results } } = useCurrentRoute();
  
  return (
    <Box>
      <Text>Home</Text>
      <Link href='/markdown'>
        Markdown page
      </Link>
      <Box>
        {results.map(({ name }) => <Text key={name} >{name}</Text>)}
      </Box>
    </Box>
  );
};