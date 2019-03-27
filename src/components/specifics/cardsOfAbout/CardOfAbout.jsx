import React from 'react';
import { Box, Image, Paragraph, ResponsiveContext } from 'grommet';

const styles = {
  image: {
    width: '30%',
  },
};

export default ({ image, text }) => {

  const getWidth = (size) => {
    if (size === 'xsmall' ||
        size === 'small')
      return '65%';
    if (size === 'medium' ||
        size === 'large')
      return '45%';

    return '25%';
  }

  const getMargin = (size) => {
    if (size === 'xsmall' ||
        size === 'small')
      return 'medium';
    
    return 'none';
  }

  return (
    <ResponsiveContext.Consumer>
      {(size) => {

        return (
          <Box
            width={getWidth(size)}
            margin={getMargin(size)}
            elevation='small'
            round='small'
            align='center'
            justify='center'
            pad='medium'>
            <Image
              style={styles.image}
              src={image}
            />
            <Paragraph
              size={size}
              margin='small'
              color='dark-2'
              textAlign='center'>
              {text}
            </Paragraph>
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}