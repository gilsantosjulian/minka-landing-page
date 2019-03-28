import React from 'react';
import { Box, ResponsiveContext } from 'grommet';
import Title from 'components/generics/Title';
import Subtitle from 'components/generics/Subtitle';

import {
  TXT_43,
  TXT_44,
  TXT_45,
} from 'assets/strings';

export default () => {

  const getMarginBottom = (size) => {
    if (size === 'small' || size === 'xsmall')
      return '80px';
    if (size === 'medium')
      return '50px';
    if (size === 'large')
      return '40px';
    if (size === 'xlarge')
      return '60px';
    return '40px';
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          < Box
            style={{
              marginBottom: getMarginBottom(size)
            }}
          >
            <Title textOne={TXT_43} textTwo={TXT_44} />
            <Subtitle text={TXT_45} />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}