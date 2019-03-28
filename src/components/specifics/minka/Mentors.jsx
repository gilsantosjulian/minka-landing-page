import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import Title from 'components/specifics/mentors/Title';
import CardsOfMentors from 'components/specifics/mentors/CardsOfMentors';

import {
  TXT_55,
  TXT_56,
  TXT_57,
  TXT_58,
  TXT_59,
  TXT_60,
  TXT_61,
  TXT_62,
  TXT_63,
  TXT_64,
  TXT_65,
  TXT_66,
  TXT_67,
  TXT_68,
  TXT_69,
  TXT_70,
  TXT_71,
  TXT_72,
} from 'assets/strings';

const ID = 'mentors';

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            id={ID}>
            <Title
              texts={[
                TXT_55,
                TXT_56,
              ]}
            />
            <CardsOfMentors
              texts={[
                TXT_57,
                TXT_58,
                TXT_59,
                TXT_60,
                TXT_61,
                TXT_62,
                TXT_63,
                TXT_64,
                TXT_65,
                TXT_66,
                TXT_67,
                TXT_68,
                TXT_69,
                TXT_70,
                TXT_71,
                TXT_72,
              ]}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};