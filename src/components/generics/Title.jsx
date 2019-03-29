import React from 'react';
import { Box, ResponsiveContext, Heading } from 'grommet';

const styles = {
  heading: {
    blueColor: {
      color: '#5ABFED'
    },
    whiteColor: {
      color: '#FFFFFF'
    }
  }
}

export default ({ textOne, textTwo }) => {

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
              style={styles.heading.whiteColor}>
              {textTwo}
            </Heading>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}