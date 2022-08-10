import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import CardOfAbout from 'components/specifics/cardsOfAbout/CardOfAbout';

export default ({
  cupImage,
  bbqImage,
  noteImage,
  cupText,
  bbqText,
  noteText,
}) => {

  const getDirection = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'column';

    return 'row';    
  };

  const getAlign = (size) => {
    if (size === 'xsmall' ||
        size === 'small' ||
        size === 'medium' ||
        size === 'large')
      return 'center';
      
    return 'stretch';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            direction={getDirection(size)}
            align={getAlign(size)}
            pad='medium'
            gap='medium'
            justify='center'>
            <CardOfAbout
              image={cupImage}
              text={cupText}
            />
            <CardOfAbout
              image={bbqImage}
              text={bbqText}
            />
            <CardOfAbout
              image={noteImage}
              text={noteText}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}