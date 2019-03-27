import React from 'react';
import { Box, Anchor } from 'grommet';

const styles = {
  container: {
    cursor: 'pointer',
  },
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
        {text.toUpperCase()}
      </Anchor>
    </Box>
  );
}