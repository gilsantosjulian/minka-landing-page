import React from 'react';
import { Box, Anchor, Text } from 'grommet';

const styles = {
  container: {
    cursor: 'pointer',
  },
  text: {
    fontWeight: 300,
  }
};

export default ({ text, id, border, color }) => {
  return (
    <Box
      style={styles.container}
      pad='xsmall'
      height='50%'
      justify='center'
      align='center'
      border={border && { side: 'bottom', color: '#5ABFED', size: 'small' }}>
      <Anchor
        href={`#${id}`}
        className='menu-item'
        color={color}
        size='small'>
        <Text
          style={styles.text}
          truncate>
          {text}
        </Text>
      </Anchor>
    </Box>
  );
}