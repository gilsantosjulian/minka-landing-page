import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import CardOfMentors from 'components/specifics/cardsOfMentors/CardOfMentors';

export default ({ texts }) => {

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
            pad='large'
            gap='medium'
            justify='center'>
            <CardOfMentors
              image={require('assets/images/tomi.svg')}
              texts={texts.slice(0, 4)}
            />
            <CardOfMentors
              image={require('assets/images/leo.svg')}
              texts={texts.slice(4, 8)}
            />
            <CardOfMentors
              image={require('assets/images/dom.svg')}
              texts={texts.slice(8, 12)}
            />
            <CardOfMentors
              image={require('assets/images/rei.svg')}
              texts={texts.slice(12, 16)}
            />
            <CardOfMentors
              image={require('assets/images/edwin.svg')}
              texts={texts.slice(16, 20)}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};