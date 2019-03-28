import React from 'react';
import { Box, ResponsiveContext } from 'grommet';
import CardOfChallenges from 'components/specifics/cardsOfChallenges/CardOfChallenges';

import {
  TXT_46,
  TXT_47,
  TXT_48,
  TXT_49,
  TXT_50,
  TXT_51,
  TXT_52,
  TXT_53,
  TXT_54,
} from 'assets/strings';

export default () => {

  const getDirection = (size) => {
    if (size === 'xsmall'
      || size === 'small'
      || size === 'medium'
      || size === 'large')
      return 'column';
    return 'row';
  };

  const getGap = (size) => {
    if (size === 'xsmall' || size === 'small')
      return '120px';
    if (size === 'medium' || size === 'large')
      return 'xlarge';
    return 'large';
  };

  const getAlign = (size) => {
    if (size === 'xsmall'
      || size === 'small'
      || size === 'medium'
      || size === 'large')
      return 'center';
    return 'stretch';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            direction={getDirection(size)}
            pad='medium'
            gap={getGap(size)}
            justify='center'
            align={getAlign(size)}>
            <CardOfChallenges
              image={require('assets/images/12.5.svg')}
              title={TXT_46}
              subTitle={TXT_50}
              textOne={TXT_47}
              textTwo={TXT_48}
              textThree={TXT_49}
              description={TXT_51}
            />
            <CardOfChallenges
              image={require('assets/images/13.5.svg')}
              title={TXT_52}
              subTitle={TXT_50}
              textOne={TXT_53}
              textTwo={TXT_54}
              textThree={''}
              description={TXT_51}
            />

          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}