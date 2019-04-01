import React from 'react';
import { Box, Anchor, Text } from 'grommet';

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
        onClick={() => PubSub.getInstance().emit('onReponsiveMenuVisibility')}
      >
        <Text
          style={styles.text}
          truncate>
          {text}
        </Text>
      </Anchor>
    </Box>
  );
}