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
  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            justify={size === 'xsmall' || size === 'small' ? 'center' : 'start'}
            wrap
            direction='row'
            alignSelf='center'
            style={{ marginBottom: '30px' }}
          >
            <Heading
              level='2'
              style={styles.heading.blueColor}
              margin={{ right: 'xsmall' }}>
              {textOne}
            </Heading>

            <Heading
              level='2'
              style={styles.heading.whiteColor}>
              {textTwo}
            </Heading>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}