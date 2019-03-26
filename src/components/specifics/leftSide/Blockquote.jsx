import React from 'react';
import { Paragraph, Box } from 'grommet';

const styles = {
  fontWeight: {
    fontWeight: 600,
  },
};

export default ({ address, date, time, prize, bonus }) => {
  return (
    <Box
      className='blockquote'
      margin={{ left: 'xlarge' }}>
      <Paragraph style={styles.fontWeight} color='dark-2'>{address}</Paragraph>
      <Paragraph style={styles.fontWeight} color='dark-2'>{date}</Paragraph>
      <Paragraph style={styles.fontWeight} color='dark-2'>{time}</Paragraph>
      <Paragraph style={styles.fontWeight} color='dark-2'>{prize}</Paragraph>
      <Paragraph style={styles.fontWeight} color='dark-2'>{bonus}</Paragraph>
    </Box>
  );
};