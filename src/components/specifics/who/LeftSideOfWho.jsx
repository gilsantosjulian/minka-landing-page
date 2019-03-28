import React from 'react';
import { Box } from 'grommet'

import Title from 'components/specifics/leftSideOfWho/Title';
import Description from 'components/specifics/leftSideOfWho/Description';

export default ({ texts }) => { 
  return (
    <Box>
      <Title
        texts={[
          texts[0],
          texts[1],
        ]}
      />
      <Description
        texts={texts.slice(2)}
      />
    </Box>
  );
};