import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import Texts from 'components/specifics/registerSectionOfAbout/Texts';
import Button from 'components/specifics/registerSectionOfAbout/Button';

export default ({ texts }) => {

  const getDirection = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'column';

    return 'row';
  };
  
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            direction={getDirection(size)}
            justify='between'
            background='dark-2'
            pad={{ vertical: 'large', horizontal: 'xlarge' }}>
            <Texts
              texts={[
                texts[0],
                texts[1],
              ]}
            />
            <Button
              text={texts[2]}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};