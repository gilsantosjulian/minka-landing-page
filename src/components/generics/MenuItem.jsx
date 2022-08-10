import React from 'react';
import { Box, Anchor, Text, ResponsiveContext } from 'grommet';

import PubSub from 'services/pubSub.js';

const styles = {
  container: {
    cursor: 'pointer',
  },
  text: {
    fontWeight: 300,
    fontSize: 16,
  }
};


export default ({ text, id, border, color }) => {

  const getBorder = (border) => {
    if (border)
      return { side: 'bottom', color: '#5ABFED', size: 'small' }
  };

  return (
    <ResponsiveContext.Consumer>
    {(size) => {
      return (
        <Box
          style={styles.container}
          pad='xsmall'
          height='50%'
          justify='center'
          align='center'>
          <Anchor
            color={color}
            href={`#${id}`}
            className='menu-item'
            size='small'
            onClick={() => size === 'xsmall' || size === 'small' || size === 'medium' || size === 'large' ? PubSub.getInstance().emit('onReponsiveMenuVisibility') : null}
          >
            <Text
              style={styles.text}
              truncate>
              {text}
            </Text>
          </Anchor>
        </Box>
      );
    }}
    </ResponsiveContext.Consumer>
  );
}