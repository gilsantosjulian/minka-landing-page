import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import Title from 'components/specifics/mentors/Title';
import CardsOfMentors from 'components/specifics/mentors/CardsOfMentors';

import {
  TXT_43,
  TXT_44,
  TXT_45,
  TXT_46,
  TXT_47,
  TXT_48,
  TXT_49,
  TXT_50,
  TXT_51,
  TXT_52,
  TXT_53,
  TXT_54,
  TXT_55,
  TXT_56,
  TXT_57,
  TXT_58,
  TXT_59,
  TXT_60,
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
                TXT_43,
                TXT_44,
              ]}
            />
            <CardsOfMentors
              texts={[
                TXT_45,
                TXT_46,
                TXT_47,
                TXT_48,
                TXT_49,
                TXT_50,
                TXT_51,
                TXT_52,
                TXT_53,
                TXT_54,
                TXT_55,
                TXT_56,
                TXT_57,
                TXT_58,
                TXT_59,
                TXT_60,
              ]}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};