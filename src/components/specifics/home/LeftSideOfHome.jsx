import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import TitleUnderlined from 'components/generics/TitleUnderlined';
import Subtitle from 'components/specifics/leftSideOfHome/Subtitle';
import Blockquote from 'components/specifics/leftSideOfHome/Blockquote';

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
            justify='center'>
            <TitleUnderlined
              text={[texts[0]]}
            />
            <Subtitle
              texts={[
                texts[1],
                texts[2],
                texts[3],
              ]} 
            />
            <Blockquote
              address={texts[4]}
              date={texts[5]}
              time={texts[6]}
              prize={texts[7]}
              bonus={texts[8]}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}