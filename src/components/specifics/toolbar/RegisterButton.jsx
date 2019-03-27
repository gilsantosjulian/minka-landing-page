import React from 'react';
import { Box, Button, ResponsiveContext, Text } from 'grommet';

const styles = {
  text: {
    fontWeight: 300,
    color: '#fff'
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
              width='20%'
              justify='center'>
              <Button
                primary
                label={<Text style={styles.text} truncate>{text}</Text>}
              />
            </Box>
          );
      }}
    </ResponsiveContext.Consumer>
  );
};