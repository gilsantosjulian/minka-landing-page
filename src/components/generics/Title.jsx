import React from 'react';
import { Box, ResponsiveContext, Heading } from 'grommet';

const styles = {
  heading: {
    blueColor: {
      color: '#5ABFED'
    },
  }
}

export default ({ textOne, textTwo, textTwoColor }) => {

  const getMargin = (size) => {
    if (size === 'xsmall' ||
        size === 'small')
      return { top: 'xlarge', bottom: 'large' };
    if (size === 'medium' ||
        size === 'large')
      return { top: 'large', bottom: 'medium' };

    return { vertical: 'large' };
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            fill='horizontal'
            justify={'center'}
            wrap
            direction='row'
            margin={getMargin(size)}
          >
            <Heading
              level='1'
              style={styles.heading.blueColor}
              margin={{ right: 'xsmall' }}>
              {textOne}
            </Heading>

            <Heading
              textAlign='center'
              level='1'
              color={textTwoColor || 'light-1'}>
              {textTwo}
            </Heading>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}