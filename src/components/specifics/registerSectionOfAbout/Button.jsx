import React from 'react';
import { Box, Button, ResponsiveContext } from 'grommet';

import PubSub from 'services/pubSub.js';

export default ({ text }) => {

  const getMargin = (size) => {
    if (size === 'xsmall' ||
      size === 'small' ||
      size === 'medium' ||
      size === 'large')
      return { top: 'large' };

    return {};
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            flex
            justify='center'
            align='center'>
            <Button
              primary
              margin={getMargin(size)}
              label={text}
              onClick={() => { PubSub.getInstance().emit('onVisibilityChange') }}
            />
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
};