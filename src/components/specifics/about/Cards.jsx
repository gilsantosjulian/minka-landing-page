import React from 'react';
import { Box, Image, Paragraph, ResponsiveContext } from 'grommet';

const styles = {
  image: {
    width: '30%',
  },
};

export default ({
  cupImage,
  bbqImage,
  noteImage,
  cupText,
  bbqText,
  noteText,
}) => {

  const renderCard = (image, text, size) => {
    return (
      <Box
        width={size === 'xsmall' || size === 'small' ? '100%' : '30%'}
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
          margin='small'
          color='dark-2'
          textAlign='center'>
          {text}
        </Paragraph>
      </Box>
    );
  }

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        return (
          <Box
            direction={size === 'xsmall' || size === 'small' ? 'column' : 'row'}
            pad='medium'
            gap='medium'
            justify='center'>
            {renderCard(cupImage, cupText, size)}
            {renderCard(bbqImage, bbqText, size)}
            {renderCard(noteImage, noteText, size)}
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}