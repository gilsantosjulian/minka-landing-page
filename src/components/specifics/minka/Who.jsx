import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import LeftSide from 'components/specifics/who/LeftSide';
import RightSide from 'components/specifics/who/RightSide';
import {
  TXT_23,
  TXT_24,
  TXT_25,
  TXT_26,
  TXT_27,
  TXT_28,
  TXT_29,
  TXT_30,
  TXT_31,
  TXT_32,
  TXT_33,
  TXT_34,
  TXT_35,
  TXT_36,
  TXT_37,
  TXT_38,
  TXT_39,
  TXT_40,
  TXT_41,
  TXT_42,
} from 'assets/strings';

const ID = 'who';

export default () => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            id={ID}
            direction={size === 'xsmall' || size === 'small' || size === 'medium' ? 'column' : 'row'}>
            <LeftSide
              texts={[
                TXT_23,
                TXT_24,
                TXT_25,
                TXT_26,
                TXT_27,
                TXT_28,
                TXT_29,
                TXT_30,
                TXT_31,
                TXT_32,
                TXT_33,
                TXT_34,
                TXT_35,
                TXT_36,
                TXT_37,
                TXT_38,
                TXT_39,
                TXT_40,
                TXT_41,
                TXT_42,
              ]}
            />
            <RightSide />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};