import React from 'react';
import { Box, ResponsiveContext } from 'grommet';
import CardsOfChallenges from 'components/specifics/challenges/CardsOfChallenges';
import Header from 'components/specifics/challenges/Header';

const ID = 'challenges';

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            id={ID}
            width={'100%'}
            height={'auto'}
            background='dark-2'
            pad={{ top: '60px', bottom: '50px' }}
            margin='0 auto'
          >
            <Header />
            <CardsOfChallenges />

          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};