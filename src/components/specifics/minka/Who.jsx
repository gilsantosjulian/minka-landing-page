import React from 'react';
import { Box, ResponsiveContext } from 'grommet';

import LeftSideOfWho from 'components/specifics/who/LeftSideOfWho';
import RightSideOfWho from 'components/specifics/who/RightSideOfWho';
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
            id={ID}
            direction={getDirection(size)}>
            <LeftSideOfWho
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
            <RightSideOfWho />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};