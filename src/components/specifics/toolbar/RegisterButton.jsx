import React from 'react';
import { Box, Button, ResponsiveContext, Text } from 'grommet';
//import Layer from 'components/specifics/registerForm/Layer';

import PubSub from 'services/pubSub.js';

const styles = {
  text: {
    fontWeight: 300,
    color: '#FFFFFF',
  },
};

export default ({ text }) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        if (size !== 'xsmall' &&
          size !== 'small' &&
          size !== 'medium' &&
          size !== 'large')
          return (
            <Box
              pad='medium'
              justify='center'>
              <Button
                primary
                label={<Text style={styles.text} truncate>{text}</Text>}
                onClick={() => PubSub.getInstance().emit('onVisibilityChange')}
              />
            </Box>
          );
      }}
    </ResponsiveContext.Consumer>
  );
};