import React from 'react';
import { Box, ResponsiveContext, Heading } from 'grommet';

const styles = {
  heading: {
    textAlignCenter: {
      textAlign: 'center',
    },
    blueColor: {
      color: '#5ABFED',
    },
    darkBlue: {
      color: '#2E416D',
    },
    white: {
      color: '#FFFFFF',
    },
  },
  container: {
    display: 'inline-block',
  },
  textAlignCenter: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'inline-block',
  },
};

export default ({ textOne, textTwo, darkBlue, textAlignCenter = true }) => {

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
            style={textAlignCenter ? styles.textAlignCenter : styles.container}
            margin={getMargin(size)}>
            <Heading
              style={textAlignCenter ? styles.heading.textAlignCenter : {}}
              level='1'>
              <span
                style={styles.heading.blueColor}>
                {textOne + ' '}
              </span>
              <span
                style={darkBlue ? styles.heading.darkBlue : styles.heading.white}>
                {textTwo}
              </span>
            </Heading>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}