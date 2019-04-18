import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import Subtitle from 'components/specifics/leftSideOfMinkaHome/Subtitle';
import Blockquote from 'components/specifics/leftSideOfMinkaHome/Blockquote';

export default ({ texts }) => {

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
            gap='medium'
            margin={{ vertical: 'xlarge' }}>
            <Subtitle
              texts={[
                texts[0],
                texts[1],
              ]} 
            />
            <Blockquote
              text={texts[2]}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}